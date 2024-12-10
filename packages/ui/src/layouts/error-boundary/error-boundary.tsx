import { Card, Container, Flex, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { Button } from '../../button';
import { BlackWavesLayout } from '../black-waves-layout/black-waves-layout';
import styles from './error-boundary.module.css';
import { PandoraLogoFull } from '../logo';

export const ErrorBoundaryWrapper = () => {
  const { t } = useTranslation();

  return (
    <BlackWavesLayout className={styles.container}>
      <Container>
        <Card p="3rem" className={styles.card}>
          <Flex align="center" direction="column">
            <PandoraLogoFull className={styles.logo} />

            <Title
              className={styles.title}
              c={'var(--text-color-primary)'}
              order={3}
            >
              {t('error.boundary')}
            </Title>

            <Button onClick={() => window.location.reload()} mt="md">
              {t('action.reload')}
            </Button>
          </Flex>
        </Card>
      </Container>
    </BlackWavesLayout>
  );
};
