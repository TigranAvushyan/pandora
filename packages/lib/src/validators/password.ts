import i18n from "../../../i18n";

export const passwordValidator = (value: string) => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*()])[A-Za-z\d@#$%^&*()]{6,20}$/.test(
    value,
  )
    ? null
    : i18n.t("validation.password", { ns: "common" });
};
