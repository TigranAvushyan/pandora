import z from "zod";

import { pandoraId } from "../navigation";
import { authRefresh } from "./api-urls";
import { IAuthToken, IHttpOptions, IRequestInit } from "./types";

export class Http {
  private _baseURL: string;
  private options?: IHttpOptions;
  constructor(baseURL: string, option?: IHttpOptions) {
    this._baseURL = baseURL;
    this.options = option;
  }

  public get tokenKey() {
    return this.options?.tokenKey || "token";
  }
  public get baseURL() {
    return this._baseURL;
  }

  public getAuthToken() {
    return JSON.parse(localStorage.getItem(this.tokenKey) || "null");
  }
  private async saveToken(response: Response) {
    const data: IAuthToken = await response.json();
    const token = z.object({
      access_token: z.string(),
      refresh_token: z.string(),
    });
    if (!token.safeParse(data).success) {
      throw new Error("Invalid token");
    }
    localStorage.setItem(this.tokenKey, JSON.stringify(data));
  }

  private deleteToken() {
    localStorage.removeItem(this.tokenKey);
    window.location.href = pandoraId.login({}, { fullPath: true });
  }

  private createFullUrl(
    url: string,
    params?: Record<string, string | number | boolean | undefined>,
  ): string {
    const fullUrl = new URL(url, this.baseURL);
    if (params) {
      fullUrl.search = new URLSearchParams(
        Object.entries(params).map(([key, value]) => [key, String(value)]),
      ).toString();
    }
    return fullUrl.href;
  }

  private async handleResponse(response: Response): Promise<Response> {
    if (!response.ok) {
      throw response;
    }
    return response;
  }

  private async refreshToken(token: IAuthToken): Promise<void> {
    const refreshResponse = await this.fetch(authRefresh(), {
      method: "POST",
      body: JSON.stringify({ refresh_token: token.refresh_token }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await this.saveToken(refreshResponse);
  }

  public async fetch(url: string, options?: IRequestInit): Promise<Response> {
    const { onError, ...opt } = options || {};
    const fullUrl = this.createFullUrl(url, options?.params);
    const response = await fetch(fullUrl, opt);
    if (!response.ok) {
      onError?.(response);
    }
    return this.handleResponse(response);
  }

  public async authFetch(
    url: string,
    options?: IRequestInit,
  ): Promise<Response> {
    let token = this.getAuthToken();

    if (!token?.access_token) {
      window.location.reload();
    }

    try {
      const response = await this.fetch(url, {
        ...options,
        headers: {
          ...options?.headers,
          Authorization: `Bearer ${token.access_token}`,
        },
      });
      return response;
    } catch (error) {
      if (error instanceof Response && error.status === 401) {
        try {
          await this.refreshToken(token);
          token = this.getAuthToken();
          this.options?.onTokenRefresh?.(token);
          return await this.authFetch(url, options);
        } catch (refreshError) {
          this.deleteToken();

          throw refreshError;
        }
      }
      throw error;
    }
  }
}
