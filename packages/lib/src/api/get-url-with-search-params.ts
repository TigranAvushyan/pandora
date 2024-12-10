export const getUrlWithSearchParams = (url: string) => {
  return `${url}?${new URLSearchParams(window.location.search).toString()}`;
};
