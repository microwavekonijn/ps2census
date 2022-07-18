import { StreamCloseResponse } from '../concerns/stream-close.response';

export class StreamClosedException extends Error {
  readonly code: number;

  readonly reason?: string;

  constructor(info: StreamCloseResponse) {
    super(`Stream closed with code ${info.code}: ${info.reason}`);

    this.name = StreamClosedException.name;

    this.code = info.code;
    this.reason = info.reason;
  }
}
