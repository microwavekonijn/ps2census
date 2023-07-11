import { StreamClient } from '../stream/stream.client';
import { EventSubscribed, EventSubscription } from './types';
import { Queue } from './utils/queue';
import { CensusCommand } from '../stream';
import { StreamResponseException } from './exceptions/stream-response.exception';

interface CommandCallback<T> {
  resolve(data: T): void;

  reject(err: Error): void;
}

export class CommandHandler {
  private readonly subscriptionQueue = new Queue<
    CommandCallback<EventSubscribed>
  >();

  private readonly recentCharacterQueue = new Queue<
    CommandCallback<{
      recent_character_id_count: number;
      recent_character_id_list?: string[];
    }>
  >();

  constructor(private readonly stream: StreamClient) {
    this.prepareListeners();
  }

  private prepareListeners(): void {
    this.stream.on('message', msg => {
      if (
        'service' in msg &&
        msg.service === 'event' &&
        msg.type == 'serviceMessage' &&
        'recent_character_id_count' in msg.payload
      ) {
        this.recentCharacterQueue.dequeue().resolve(msg.payload);
      } else if ('subscription' in msg) {
        this.subscriptionQueue.dequeue().resolve(msg.subscription);
      }
    });

    for (const event of ['close', 'destroy'])
      this.stream.on('close', () => {
        while (this.subscriptionQueue.size)
          this.subscriptionQueue
            .dequeue()
            .reject(
              new StreamResponseException(
                'Stream closed before receiving response',
              ),
            );

        while (this.recentCharacterQueue.size)
          this.recentCharacterQueue
            .dequeue()
            .reject(
              new StreamResponseException(
                'Stream closed before receiving response',
              ),
            );
      });
  }

  subscribe(subscription: EventSubscription): Promise<EventSubscribed> {
    return this.sendCommand(this.subscriptionQueue, {
      service: 'event',
      action: 'subscribe',
      ...subscription,
    });
  }

  clearSubscribe(subscription: EventSubscription): Promise<EventSubscribed> {
    return this.sendCommand(this.subscriptionQueue, {
      service: 'event',
      action: 'clearSubscribe',
      ...subscription,
    });
  }

  async clearSubscribeAll(): Promise<void> {
    await this.sendCommand(this.subscriptionQueue, {
      service: 'event',
      action: 'clearSubscribe',
      all: 'true',
    });
  }

  async recentCharacters(): Promise<string[]> {
    const { recent_character_id_list } = await this.sendCommand(
      this.recentCharacterQueue,
      {
        service: 'event',
        action: 'recentCharacterIds',
      },
    );

    return recent_character_id_list as string[];
  }

  async recentCharacterCount(): Promise<number> {
    const { recent_character_id_count } = await this.sendCommand(
      this.recentCharacterQueue,
      {
        service: 'event',
        action: 'recentCharacterIds',
      },
    );

    return recent_character_id_count;
  }

  private sendCommand<T>(
    queue: Queue<CommandCallback<T>>,
    command: CensusCommand,
  ): Promise<T> {
    if (!this.stream.isReady)
      return Promise.reject(new StreamResponseException('Stream is closed'));

    return new Promise<T>((resolve, reject) => {
      this.stream.send(command);

      queue.enqueue({
        resolve,
        reject,
      });
    });
  }
}
