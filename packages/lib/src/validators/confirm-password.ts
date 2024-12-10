import i18n from "../../../i18n";

export const confirmPasswordValidator = <T extends { password: string }>(
  value: string,
  values: T,
) =>
  value !== values.password ? i18n.t("validation.passwordsDontMatch") : null;
