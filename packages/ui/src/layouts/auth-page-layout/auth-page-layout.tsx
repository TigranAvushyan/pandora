import { Center, Container } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";

import { BlackWavesLayout, LanguageSelect } from "@pandora/ui";

import styles from "./auth-page-layout.module.css";

export const AuthPageLayout = () => {
  const { i18n } = useTranslation();
  return (
    <BlackWavesLayout>
      <Container className={styles.container}>
        <Center>
          <Outlet />
        </Center>
        <div className={styles.languageSelect}>
          <LanguageSelect
            labelVariant="short"
            value={i18n.language}
            supportLanguages={["ru", "en"]}
            onChange={(e) => {
              if (e) i18n.changeLanguage(e);
            }}
          />
        </div>
      </Container>
    </BlackWavesLayout>
  );
};
