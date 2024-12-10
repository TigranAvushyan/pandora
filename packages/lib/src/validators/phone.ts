import i18n from "../../../i18n";

export const phoneValidator = (phone: string) => {
  const phoneRegex = /^\+?[0-9]{1,4}?[0-9\s-]{7,15}$/;

  return phoneRegex.test(phone)
    ? null
    : i18n.t("validation.phoneInvalid", { ns: "common" });
};
