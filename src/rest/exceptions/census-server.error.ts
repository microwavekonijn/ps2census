export class CensusServerError extends Error {
  readonly code: string;

  constructor(data: any) {
    super(data.errorMessage ?? 'Error message not supplied');

    this.name = 'CensusServerError';
    this.code = data.errorCode;
  }
}
