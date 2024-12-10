import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, MouseEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { formatTime } from '@pandora/lib';
import useCountdown from '@pandora/lib';

import { Button } from '../../button';
import { Input, InputProps } from '../base-input';
import styles from './repeat-input.module.css';

enum RepeatInputStatus {
  START,
  REPEAT,
}

type onRepeatResult = {
  message: number;
};

export type RepeatInputProps = InputProps & {
  onRepeat?: (event: MouseEvent<HTMLButtonElement>) => Promise<onRepeatResult>;

  startButtonProps?: ComponentPropsWithoutRef<typeof Button>;
  repeatButtonProps?: ComponentPropsWithoutRef<typeof Button>;
  success?: boolean;
  disabledAll?: boolean;
  hasError: boolean;
  parentValue: string;
};

export const RepeatInput: React.FC<RepeatInputProps> = ({
  className,
  onRepeat,
  disabled,
  startButtonProps,
  repeatButtonProps,
  success,
  hasError,
  disabledAll: disabledAllProp,
  parentValue,
  ...props
}) => {
  const { t } = useTranslation();

  const [status, setStatus] = useState(RepeatInputStatus.START);

  const [loading, setLoading] = useState(false);

  const disableAll = !parentValue || disabledAllProp || success || hasError;

  const { timer, isRunning, startCountdown, setCountStart, resetCountdown } =
    useCountdown(60);

  const timeFormatted = formatTime(timer);

  const onClick = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      setLoading(true);
      setStatus(RepeatInputStatus.REPEAT);
      const res = await onRepeat?.(event);
      resetCountdown(res?.message);
      startCountdown();
    } catch (e) {
      if (e instanceof Response) {
        const data = await e.json();
        if (typeof data === 'object') {
          resetCountdown(data.meta as number);
          startCountdown();
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Input
        className={clsx(styles.input, className)}
        disabled={disableAll || disabled}
        {...props}
      ></Input>
      <div className={styles.buttons}>
        {
          {
            [RepeatInputStatus.START]: (
              <Button
                {...startButtonProps}
                loading={loading || startButtonProps?.loading}
                disabled={disableAll || startButtonProps?.disabled}
                onClick={onClick}
              >
                {startButtonProps?.children ?? t('action.send')}
              </Button>
            ),
            [RepeatInputStatus.REPEAT]: (
              <Button
                {...repeatButtonProps}
                loading={loading || repeatButtonProps?.loading}
                disabled={
                  disableAll || isRunning || repeatButtonProps?.disabled
                }
                onClick={onClick}
              >
                {!isRunning
                  ? repeatButtonProps?.children ?? t('action.repeat')
                  : `${t('action.repeat')} ${timeFormatted}`}
              </Button>
            ),
          }[status]
        }
      </div>
    </div>
  );
};
