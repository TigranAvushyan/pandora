/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createNavigation } from "./navigation";

export const pandoraAccount = createNavigation(
  /**
   * TODO: del ts ignore
   */
  /*@ts-ignore*/
  import.meta.env.VITE_PANDORA_ID_URL || window.location.origin,
  {
    home: () => "/",
    changePhone: () => "/change-phone",
    changeEmail: () => "/change-email",
    entryPersonalData: () => "/entry-personal-data",
    entryPhone: () => "/entry-phone",
    entryEmail: () => "/entry-email",
    changePassword: () => "/change-password",
    phoneVerifyCode: () => "/phone-verify-code",
    emailVerifyCode: () => "/email-verify-code",
  },
);
