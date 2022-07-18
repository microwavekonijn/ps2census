export class StreamResponseException extends Error {
  constructor(message: string) {
    super(message);

    this.name = StreamResponseException.name;
  }
}
