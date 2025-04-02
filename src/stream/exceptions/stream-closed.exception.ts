export class StreamClosedException extends Error {
  constructor(
    readonly code: number,
    readonly reason?: string,
  ) {
    super(`Stream closed with code ${code}: ${reason}`);

    this.name = StreamClosedException.name;
  }
}
