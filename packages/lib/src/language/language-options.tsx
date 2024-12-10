import { Group } from '@mantine/core';

import languages from '../../../i18n';
import { SelectProps } from '../../../ui/src';

export const getLanguageOptions = (
  variant: 'short' | 'long' | 'native',
  filter?: readonly string[]
) => {
  const value = Object.entries(languages).map(([key, language]) => {
    const code = key as keyof typeof languages;
    return {
      value: code,
      label: {
        short: code.toUpperCase(),
        long: language.language,
        native: language.native,
      }[variant],
    };
  });

  return filter?.length
    ? value.filter(({ value }) => filter.includes(value))
    : value;
};

export const renderLanguageOptions: SelectProps['renderOption'] = ({
  option,
}) => {
  return (
    <Group flex="1" gap="sm" align="center">
      <img src={languages[option.value as keyof typeof languages]?.flag} />
      {option.label}
    </Group>
  );
};
