export interface SuccessApiResponse<T> {
  data: T;
}

export interface ErrorApiResponse {
  error: {
    message: string;
  };
}

export type ApiResponse<T> = SuccessApiResponse<T> | ErrorApiResponse;
