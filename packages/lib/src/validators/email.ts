import i18n from "../../../i18n";

export const emailValidator = (email: string) => {
  return /^\S+@\S+$/.test(email)
    ? null
    : i18n.t("validation.invalidEmail", { ns: "common" });
};
