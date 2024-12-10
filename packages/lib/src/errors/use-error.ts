import { UseFormReturnType } from "@mantine/form";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const useError = <T extends Record<string, unknown>>({
  ns: nsProps,
  form,
}: { ns?: string; form?: UseFormReturnType<T> } = {}) => {
  const ns = (nsProps ?? "") as "common";
  const [error, setError] = useState("");
  const { t } = useTranslation(["common", ns]);

  const setErrorWithMessage = async (error: unknown, context?: string) => {
    if (error instanceof Response) {
      const data = await error.json();
      if (typeof data === "object") {
        const errorMessage = t(`error.${data.message}`, {
          ns: ns,
          defaultValue: t("status.unknownError", {
            ns: "common",
          }),
          context,
        });
        if (form && data.field in form.values) {
          form.setFieldError(data.field, errorMessage);
          setError("");
          return;
        }

        setError(errorMessage);
        return;
      }
    }
    setError(error instanceof Error ? error.message : String(error));
  };

  return {
    error,
    setErrorWithMessage,
    clearError: () => setError(""),
    setError,
  };
};
