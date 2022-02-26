export interface IResult<T> {
  ok?: boolean;
  data?: T;
  message?: string;
  error?: Error;
}
