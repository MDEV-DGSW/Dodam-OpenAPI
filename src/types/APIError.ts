export class APIError extends Error {
  public code: number;

  constructor(
    code: number,
    message: string
  ) {
    super(message);
    this.code = code;
  }
}
