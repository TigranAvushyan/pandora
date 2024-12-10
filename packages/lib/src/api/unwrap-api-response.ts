export const unwrapApiResponse = async <T>(response: Response): Promise<T> => {
  return await response.json();
};
