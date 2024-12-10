import i18n from "../../../i18n";

export const requiredValidator = (value?: unknown) => {
  let val: boolean;

  switch (typeof value) {
    case "number":
      val = value !== undefined && value !== null;
      break;
    case "string":
      val = Boolean(value.trim());
      break;
    case "boolean":
      val = value;
      break;
    default:
      val = true;
  }

  return val ? null : i18n.t("validation.requiredToFill", { ns: "common" });
};
