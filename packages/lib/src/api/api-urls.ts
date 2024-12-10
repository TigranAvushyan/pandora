export const authRefresh = () => "/api/auth/refresh";
export const authLogin = () => "/api/auth/login";
export const authLoginByCode = () => "/api/auth/login-by-code";
export const authVerify = () => "/api/auth/verify";

export const getMe = () => "/api/me";
export const updatePassword = () => "/api/me/update-password";
export const updateContact = () => "/api/me/update-contact";
export const updateUser = () => "/api/me/update";
export const authSendCode = () => "/api/me/send-code";
export const register = () => "/api/users/register";
export const resetPassword = () => "/api/users/reset-password";

export const getCaptcha = () => "/api/verification/get-captcha";
export const verifyCode = () => "/api/verification/verify-code";
export const verifyCaptcha = () => "/api/verification/verify-captcha";
export const sendCode = () => "/api/verification/send-code";
export const safeSendCode = () => "/api/verification/safe-send-code";
