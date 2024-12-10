type Params = Record<string, string | number> | undefined;
type Config = {
  fullPath?: boolean;
};

type ReturnType<T> = Record<
  keyof T,
  (params?: Params, config?: Config) => string
>;
export const createNavigation = <
  T extends Record<string, <P extends Params>(params: P) => string>,
>(
  baseURL: string,
  urls: T,
) => {
  const res: ReturnType<T> = {} as ReturnType<T>;
  for (const [key, value] of Object.entries(urls)) {
    res[key as keyof T] = (params, config) => {
      const url = value(params);
      if (config?.fullPath) {
        return new URL(url, baseURL).href;
      }
      return url;
    };
  }

  return res;
};
