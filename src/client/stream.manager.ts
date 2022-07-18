import { CensusClient } from './census.client';
import { StreamClient, StreamClientOptions } from '../stream/stream.client';
import { StreamHandler } from './stream.handler';
import { DuplicateFilter } from './utils/duplicate-filter';
import { SubscriptionManager } from './subscription.manager';
import { EventSubscription } from './types/event-subscription.types';
import { CommandHandler } from './command.handler';
import { ServiceIdRejectException } from './exceptions/service-id-reject.exception';
import Timeout = NodeJS.Timeout;

export interface StreamManagerOptions extends StreamClientOptions {
  subscription?: EventSubscription;
  reconnectDelay?: number;
}

export class StreamManager {
  /**
   * The event stream
   */
  private readonly stream: StreamClient;

  /**
   * @type {SubscriptionManager} Manages the subscription
   */
  readonly subscriptionManager: SubscriptionManager;

  /**
   * @type {StreamHandler} handles events, and subscriptions
   */
  private readonly streamHandler: StreamHandler;

  /**
   * @type {CommandHandler} handles commands
   */
  readonly commandHandler: CommandHandler;

  /**
   * @type {boolean} whether the connection has been started
   */
  private isStarted = false;

  /**
   * @type {number} delay before trying to reconnect
   */
  private readonly reconnectDelay: number;

  /**
   * @type {Timeout?} The reconnect timeout
   */
  private reconnectTimeout?: Timeout;

  /**
   * @param {CensusClient} client
   * @param {StreamManagerOptions} options
   */
  constructor(
    readonly client: CensusClient,
    options: StreamManagerOptions = {},
  ) {
    this.stream = new StreamClient(
      this.client.serviceId,
      this.client.environment,
      options,
    );

    this.streamHandler = new StreamHandler(
      this.client,
      this.stream,
      new DuplicateFilter(),
    );

    this.commandHandler = new CommandHandler(this.stream);

    this.subscriptionManager = new SubscriptionManager(
      this.client,
      this.stream,
      this.commandHandler,
      options.subscription,
    );

    this.reconnectDelay = options.reconnectDelay ?? 2000;

    this.prepareEventStream();
  }

  /**
   *
   */
  private prepareEventStream(): void {
    /**
     * Stream closed
     */
    this.stream.on('close', ({ code, reason }) => {
      if (!this.isStarted) {
        this.client.emit('disconnected', code, reason);
        return;
      }

      this.client.emit('reconnecting');

      void this.reconnect();
    });

    /**
     * Stream destroyed without connection
     */
    this.stream.on('destroyed', () => {
      if (!this.isStarted) return;

      this.client.emit('reconnecting');

      void this.reconnect();
    });

    this.stream.on('error', error => {
      this.client.emit('error', error);
    });

    this.stream.on('warn', error => {
      this.client.emit('warn', error);
    });

    this.stream.on('debug', info => {
      this.client.emit('debug', info);
    });
  }

  /**
   * Start connection
   *
   * @return {Promise<void>}
   */
  async connect(): Promise<void> {
    if (this.isStarted) return;
    this.isStarted = true;

    const ready = () => {
      this.client.emit('ready');
    };

    this.stream.once('ready', ready);

    try {
      await this.stream.connect();
    } catch (e: any) {
      this.stream.off('ready', ready);
      this.isStarted = false;

      if ([403].includes(e.httpState)) {
        throw new ServiceIdRejectException(`Service ID rejected.`);
      } else {
        throw e;
      }
    }
  }

  /**
   * Bye bye
   *
   * @return {Promise<void>}
   */
  disconnect(): void {
    if (!this.isStarted) return;
    this.isStarted = false;

    this.client.emit('debug', `Manager disconnected.`);

    if (this.reconnectTimeout) {
      clearTimeout(this.reconnectTimeout);
      delete this.reconnectTimeout;
    }

    this.stream.destroy({ code: 1000, emit: false });
  }

  /**
   * Connection has done something, now we need a new one
   */
  private async reconnect(): Promise<void> {
    if (this.reconnectTimeout) clearTimeout(this.reconnectTimeout);

    this.reconnectTimeout = setTimeout(async () => {
      try {
        await this.stream.connect();
      } catch (e: any) {
        if ([403].includes(e.httpState)) {
          this.client.emit(
            'error',
            new Error(`Service ID rejected while trying to reconnect.`),
          );
          this.disconnect();

          return;
        }

        this.client.emit(
          'debug',
          `Reconnect failed, trying again in ${this.reconnectDelay}ms.`,
        );
      }
    }, this.reconnectDelay);
  }
}
