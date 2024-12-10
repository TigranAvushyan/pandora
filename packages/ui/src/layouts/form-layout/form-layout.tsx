import { Alert, Card, Flex, Text, Title } from '@mantine/core';
import clsx from 'clsx';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './form-layout.module.css';
import { PandoraLogoFull } from '../logo';

type Props = {
  children?: React.ReactNode;
  title: string;
  subtitle?: string;
  subtitleClassName?: string;
  className?: string;
  alert?: string;
  alertTitle?: string;
  headerLeft?: React.ReactNode;
  headerRight?: React.ReactNode;
};
export const FormLayout: FC<Props> = ({
  children,
  className,
  title,
  subtitle,
  subtitleClassName,
  alertTitle,
  alert,
  headerLeft,
  headerRight,
}) => {
  const { t } = useTranslation();
  const showSides = headerLeft || headerRight;
  return (
    <Card className={clsx(styles.container, className)}>
      <Flex align="center" direction="column">
        <div className={styles.header}>
          {showSides && <div className={styles.left}>{headerLeft}</div>}
          <div className={styles.center}>
            <PandoraLogoFull className={styles.logo} />
            <Title className={styles.title} order={2}>
              {title}
            </Title>
            {subtitle && (
              <Text
                size="md"
                className={clsx(subtitleClassName, styles.subtitle)}
                c={'var(--text-color-secondary)'}
              >
                {subtitle}
              </Text>
            )}
          </div>
          {showSides && <div className={styles.right}>{headerRight}</div>}
        </div>

        {children}

        {alert && (
          <Alert
            className={styles.alert}
            variant="light"
            color="red"
            title={alertTitle || t('status.error')}
          >
            {alert}
          </Alert>
        )}
      </Flex>
    </Card>
  );
};
