import { Card, Flex, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { PandoraLogoFull } from '../../layouts/logo';

import styles from './not-found.module.css';

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Card p="2rem" className={styles.container}>
      <Flex align="center" direction="column">
        <PandoraLogoFull className={styles.logo} />
        <Title className={styles.title} order={1} size="5rem">
          {'#404'}
        </Title>

        <Title
          className={styles.subtitle}
          c={'var(--text-color-secondary)'}
          order={3}
        >
          {t('error.notFound', { ns: 'common' })}
        </Title>
      </Flex>
    </Card>
  );
};
