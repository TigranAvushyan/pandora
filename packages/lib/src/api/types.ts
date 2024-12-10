export type IRequestInit = RequestInit & {
  params?: Record<string, string | number | boolean | undefined>;
  onError?: (response: Response) => void;
};

export type IAuthToken = {
  access_token: string;
  refresh_token: string;
};

export type IHttpOptions = {
  tokenKey: string;
  onTokenRefresh?: (token: IAuthToken | null) => void;
};
