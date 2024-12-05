import auth from "./locales/ru/auth.json";
import common from "./locales/ru/common.json";
import home from "./locales/ru/home.json";

export declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: {
      common: typeof common;
      auth: typeof auth;
      home: typeof home;
    };
  }
}
