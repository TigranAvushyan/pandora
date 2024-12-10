/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createNavigation } from "./navigation";

/**
 * TODO: del ts ignore
 */
/*@ts-ignore*/
const vitePandoraAccountUrl = import.meta.env.VITE_PANDORA_ACCOUNT_URL;

export const pandoraId = createNavigation(
  vitePandoraAccountUrl || window.location.origin,
  {
    login: () => "/login",
    register: () => "/register",
    loginByPhone: () => "/login-by-phone",
    forgotPassword: () => "/forgot-password",
    finishChangePassword: () => "/finish-change-password",
    finishAuth: () => "/finish-auth",
  },
);

export const redirectToPandoraAccount = () => {
  window.location.href = vitePandoraAccountUrl;
};
