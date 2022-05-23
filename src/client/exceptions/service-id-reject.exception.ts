export class ServiceIdRejectException extends Error {
  constructor(message: string) {
    super(message);

    this.name = 'StreamClosedException';
  }
}
