import { LoadingOverlay } from "@mantine/core";
import { FC, ReactNode, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const NetworkError: FC<{ children: ReactNode }> = ({ children }) => {
  const [error, setError] = useState(false);

  const { t } = useTranslation();
  useEffect(() => {
    window.addEventListener("offline", () => {
      setError(true);
    });

    window.addEventListener("online", () => {
      setError(false);
    });
  }, [setError]);

  return (
    <>
      <LoadingOverlay
        visible={error}
        zIndex={1000}
        overlayProps={{ color: "var(--grayscale-900)", blur: 4, fixed: true }}
        loaderProps={{
          children: (
            <h3 style={{ color: "var(--grayscale-50)" }}>
              {t("error.network")}
            </h3>
          ),
        }}
      />
      {children}
    </>
  );
};
