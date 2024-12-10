import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Select, SelectProps } from '@pandora/ui';

import languages from '@pandora/i18n';
import {
  getLanguageOptions,
  renderLanguageOptions,
} from '../../../lib/src/language';

export interface Props extends SelectProps {
  labelVariant?: 'short' | 'long' | 'native';
  supportLanguages?: readonly string[];
}

export const LanguageSelect: FC<Props> = ({
  labelVariant = 'native',
  supportLanguages,
  ...props
}) => {
  const { t } = useTranslation();
  return (
    <Select
      placeholder={t('personalInfo.language')}
      data={getLanguageOptions(labelVariant, supportLanguages || [])}
      renderOption={renderLanguageOptions}
      leftSection={
        props.value ? (
          <img src={languages[props.value as keyof typeof languages]?.flag} />
        ) : undefined
      }
      {...props}
    />
  );
};
