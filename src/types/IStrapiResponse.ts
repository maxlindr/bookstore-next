export interface IStrapiResponse<T> {
  data: T;
  meta: unknown;
  error: {
    status: number; // HTTP status
    name: 'ApplicationError' | 'ValidationError';
    message: string;
    // error info specific to the error type
    details: Record<string, unknown>;
  };
}
