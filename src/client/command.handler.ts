import { StreamClient } from '../stream/stream.client';
import { EventSubscribed, EventSubscription } from './types';
import { Queue } from './utils/queue';
import { CensusCommand } from '../stream';
import { StreamClosedException } from './exceptions/stream-closed.exception';

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
    this.stream.on('message', message => {
      if (
        message.service === 'event' &&
        message.type == 'serviceMessage' &&
        'recent_character_id_count' in message.payload
      ) {
        this.recentCharacterQueue.dequeue().resolve(message.payload);
      } else if (message.subscription) {
        this.subscriptionQueue.dequeue().resolve(message.subscription);
      }
    });

    for (const event of ['close', 'destroy'])
      this.stream.on('close', () => {
        while (this.subscriptionQueue.size)
          this.subscriptionQueue
            .dequeue()
            .reject(
              new StreamClosedException(
                'Stream closed before receiving response',
              ),
            );

        while (this.recentCharacterQueue.size)
          this.recentCharacterQueue
            .dequeue()
            .reject(
              new StreamClosedException(
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
    return new Promise<T>((resolve, reject) => {
      if (!this.stream.isReady)
        reject(new StreamClosedException('Stream is closed'));

      this.stream
        .send(command)
        .then(() => {
          queue.enqueue({
            resolve,
            reject,
          });
        })
        .catch(reject);
    });
  }
}
