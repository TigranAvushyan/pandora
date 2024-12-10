import { useTranslation } from 'react-i18next';
import { MantineProvider } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';
import '@pandora/i18n';
import { Button } from '@pandora/ui';

export function App() {
  const { t } = useTranslation(['common']);
  return (
    <MantineProvider>
      <DatesProvider
        settings={{
          locale: 'ru',
          firstDayOfWeek: 0,
          weekendDays: [0],
          timezone: 'UTC',
        }}
      >
        <Button>{t('action.send', { ns: 'common' })}</Button>
      </DatesProvider>
    </MantineProvider>
  );
}

export default App;
