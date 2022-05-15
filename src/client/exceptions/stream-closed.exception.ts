export class StreamClosedException extends Error {
  constructor(message: string) {
    super(message);

    this.name = 'StreamClosedException';
  }
}
