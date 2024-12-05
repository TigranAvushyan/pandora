import { useTranslation } from 'react-i18next';
import '@pandora/i18n';

export function App() {
  const { t } = useTranslation(['common']);
  return <div>{t('action.send', { ns: 'common' })}</div>;
}

export default App;
