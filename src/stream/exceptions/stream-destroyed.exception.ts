export class StreamDestroyedException extends Error {
  constructor() {
    super('Stream destroyed before connection could be made');

    this.name = StreamDestroyedException.name;
  }
}
