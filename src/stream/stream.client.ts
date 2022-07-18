import { EventEmitter } from 'eventemitter3';
import WebSocket, { ClientOptions, Data } from 'ws';
import { PS2Environment } from '../types/ps2.options';
import { CensusMessage } from './types/messages.types';
import { CensusCommand } from './types/command.types';
import { StreamDestroyedException } from './exceptions/stream-destroyed.exception';
import { StreamClosedException } from './exceptions/stream-closed.exception';
import Timeout = NodeJS.Timeout;

enum State {
  IDLE,
  CONNECTING,
  NEARLY,
  READY,
  DISCONNECTED,
}

export interface StreamClientOptions {
  connectionTimeout?: number;
  heartbeatInterval?: number;
  endpoint?: string;
  wsOptions?: ClientOptions;
}

type StreamClientEvents = {
  ready: () => void;
  destroyed: () => void;
  close: (code: number, reason?: string) => void;
  error: (err: Error) => void;
  warn: (err: Error) => void;
  debug: (info: string) => void;
  message: (message: CensusMessage) => void;
};

export class StreamClient extends EventEmitter<StreamClientEvents> {
  /**
   * @type {string} The endpoint url for the Census stream
   */
  private readonly gatewayUri: string;

  /**
   * @type {number} Period of the heartbeat in milliseconds
   */
  private readonly heartbeatInterval: number;

  /**
   * @type {Timeout?} Interval at which the heartbeat is reset
   */
  private heartbeatTimer?: Timeout;

  /**
   * @type {boolean} Whether a heartbeat was send by the websocket
   */
  private heartbeatAcknowledged = false;

  /**
   * @type {number?} Unix time when last heartbeat was send
   */
  private lastHeartbeat?: number;

  /**
   * @type {State} client state
   */
  private state = State.IDLE;

  /**
   * @type {WebSocket?} Websocket client to PS2 event stream
   */
  private connection?: WebSocket;

  /**
   * @type {ClientOptions?} Websocket options used to establish stream
   */
  private readonly wsOptions?: ClientOptions;

  /**
   * @type {number} Unix time when client got connected
   */
  private connectedAt?: number;

  /**
   * @type {Timeout?} Timeout to make sure the connection is established within a reasonable time
   */
  private connectionTimeout?: Timeout;

  /**
   * @type {number} Timeout time for when we waited long enough
   */
  private readonly connectionTimeoutTime: number;

  /**
   * @param {string} serviceId
   * @param {PS2Environment} environment
   * @param {StreamClientOptions} options
   */
  constructor(
    private readonly serviceId: string,
    private readonly environment: PS2Environment,
    {
      connectionTimeout = 20000,
      heartbeatInterval = 30000,
      endpoint = 'wss://push.planetside2.com/streaming',
      wsOptions,
    }: StreamClientOptions = {},
  ) {
    super();

    this.gatewayUri = `${endpoint}?environment=${this.environment}&service-id=s:${this.serviceId}`;
    this.heartbeatInterval = heartbeatInterval;
    this.connectionTimeoutTime = connectionTimeout;
    this.wsOptions = wsOptions;
  }

  /**
   * Maybe, is ready, maybe is not, who knows
   */
  get isReady(): boolean {
    return this.state === State.READY;
  }

  /**
   * Connect to the PS2 event stream
   *
   * @return {Promise<void>}
   */
  connect(): Promise<void> {
    if (
      this.connection &&
      this.connection.readyState === WebSocket.OPEN &&
      this.state === State.READY
    )
      return Promise.resolve();

    return new Promise((resolve, reject) => {
      const ready = () => {
        cleanup();
        resolve();
      };

      const destroyed = () => {
        cleanup();
        reject(new StreamDestroyedException());
      };

      const closed = (code: number, reason?: string) => {
        cleanup();
        reject(new StreamClosedException(code, reason));
      };

      const cleanup = () => {
        this.removeListener('ready', ready)
          .removeListener('destroyed', destroyed)
          .removeListener('close', closed);
      };

      this.once('ready', ready)
        .once('destroyed', destroyed)
        .once('close', closed);

      if (this.connection && this.state == State.READY) {
        this.emit('debug', `Open connection found, continuing operations.`);

        return;
      }

      if (this.connection) {
        this.emit('debug', `Connection found, destroying connection.`);
        this.destroy({ emit: false });
      }

      this.emit('debug', `Connecting.`);

      this.state = State.CONNECTING;
      this.connectedAt = Date.now();
      this.setConnectionTimeout(true);

      const ws = (this.connection = new WebSocket(
        this.gatewayUri,
        this.wsOptions,
      ));

      ws.on('open', this.onOpen.bind(this))
        .on('message', this.onMessage.bind(this))
        .on('close', this.onClose.bind(this))
        .on('error', this.onError.bind(this));
    });
  }

  /**
   * client successfully connected
   */
  private onOpen(): void {
    this.emit('debug', `Established connection.`);
    this.state = State.NEARLY;
  }

  /**
   * Handles messages received from the gateway
   *
   * @param {WebSocket.Data} data
   */
  private onMessage(data: Data): void {
    if (!(data instanceof Buffer)) {
      this.emit(
        'warn',
        new TypeError(`Received data in unexpected format: ${data}`),
      );
      return;
    }

    try {
      const parsed = JSON.parse(data.toString());

      this.onPackage(parsed);
    } catch (err) {
      this.emit('warn', err as Error);
    }
  }

  /**
   * Handles the data received
   *
   * @param data
   */
  private onPackage(data: CensusMessage): void {
    if (
      'service' in data &&
      data.service === 'push' &&
      data.type == 'connectionStateChanged'
    ) {
      if (data.connected) {
        this.setConnectionTimeout(false);
        this.setHeartbeatTimer(this.heartbeatInterval);
        this.state = State.READY;
        this.emit('ready');
      } else {
        this.destroy();
      }
    } else if (
      'service' in data &&
      data.service === 'event' &&
      data.type == 'heartbeat'
    ) {
      this.acknowledgeHeartbeat();
    }

    setImmediate(() => {
      this.emit('message', data);
    });
  }

  /**
   * Connection closed by server
   */
  private onClose(code: number, reason: Buffer): void {
    this.emit(
      'debug',
      `Connection closed. ${JSON.stringify({
        code,
        reason: reason.toString(),
      })}`,
    );

    this.setHeartbeatTimer(-1);
    this.setConnectionTimeout(false);
    this.cleanupConnection();

    this.state = State.DISCONNECTED;
    this.emit('close', code, reason.length ? reason.toString() : undefined);
  }

  /**
   * Relays error from the websocket connection to the client
   *
   * @param {Error} error
   */
  private onError(error: Error): void {
    this.emit('error', error);
  }

  /**
   * If a connection exists cleanup listeners
   */
  private cleanupConnection(): void {
    this.connection?.removeAllListeners();
  }

  /**
   * Destroys a connection forcefully
   *
   * @param {number} code
   * @param {boolean} emit
   */
  destroy({ code = 1000, emit = true } = {}): void {
    this.setHeartbeatTimer(-1);
    this.setConnectionTimeout(false);

    if (this.connection) {
      if (this.connection.readyState === WebSocket.OPEN) {
        this.connection.close(code);
      } else {
        this.cleanupConnection();

        try {
          this.connection.close(code);
        } catch {
          // Beep beep
        }

        if (emit) this.emit('destroyed');
      }

      this.connection = undefined;
    } else if (emit) {
      if (emit) this.emit('destroyed');
    }

    this.state = State.DISCONNECTED;
  }

  /**
   * Toggle connection timeout
   *
   * @param {boolean} toggle
   */
  private setConnectionTimeout(toggle: boolean): void {
    if (!toggle) {
      if (this.connectionTimeout) {
        this.emit('debug', `Connection timeout cleared`);
        clearTimeout(this.connectionTimeout);
        delete this.connectionTimeout;
      }
      return;
    }

    this.emit('debug', `Connection timeout set`);
    this.connectionTimeout = setTimeout(() => {
      this.emit('debug', `Connection timed out.`);
      this.destroy({ code: 1001 });
    }, this.connectionTimeoutTime);
  }

  /**
   * Manages the heartbeat timer
   *
   * @param {number} interval Negative value will forget the timer
   */
  private setHeartbeatTimer(interval: number): void {
    if (interval < 0) {
      if (this.heartbeatTimer) {
        this.emit('debug', `Clearing heartbeat interval.`);

        clearInterval(this.heartbeatTimer);
        delete this.heartbeatTimer;
      }
      return;
    }

    this.emit('debug', `Setting heartbeat interval(${interval}ms).`);

    if (this.heartbeatTimer) clearInterval(this.heartbeatTimer);

    this.heartbeatTimer = setInterval(
      () => this.resetHeartbeat(),
      this.heartbeatInterval,
    );
  }

  /**
   * Checks if the heartbeat has been acknowledged and resets the heartbeat
   */
  private resetHeartbeat(): void {
    if (!this.heartbeatAcknowledged) {
      this.emit(
        'debug',
        `Heartbeat not been received, assume connection has gone bad.`,
      );
      this.destroy({ code: 1001 });
      return;
    }

    this.emit('debug', `Reset heartbeat acknowledgement.`);

    this.heartbeatAcknowledged = false;
  }

  /**
   * Acknowledges a heartbeat send from the gateway
   */
  private acknowledgeHeartbeat(): void {
    this.emit('debug', `Heartbeat acknowledged.`);

    this.heartbeatAcknowledged = true;
    this.lastHeartbeat = Date.now();
  }

  /**
   * @param data
   */
  send(data: CensusCommand): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.connection) {
        reject(new Error(`Connection not available`));
        return;
      }

      this.connection.send(JSON.stringify(data), err => {
        if (err) reject(err);
        else resolve();
      });
    });
  }
}
