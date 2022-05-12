import { CensusClient } from './census.client';
import { StreamClient } from '../stream/stream.client';
import { PS2EventNames } from '../stream/types/ps2.events';
import { EventSubscribed, EventSubscription } from './types';
import { CensusCommands } from '../stream';
import Subscribe = CensusCommands.Subscribe;
import ClearSubscribe = CensusCommands.ClearSubscribe;

export class SubscriptionManager {
  /**
   * Characters subscribed to
   */
  private readonly characters: Set<string>;

  /**
   * Worlds subscribed to
   */
  private readonly worlds: Set<string>;

  /**
   * Events to listen to
   */
  private readonly eventNames: Set<'all' | PS2EventNames>;

  /**
   * Whether both worlds and characters should match
   */
  private logicalAndCharactersWithWorlds: boolean;

  /**
   * Queue that contains handlers for subscription response from the event stream
   */
  private readonly subscriptionResponseQueue = new Set<
    (subscription: EventSubscribed) => void
  >();

  /**
   * @param {CensusClient} client the client used to emit debug events
   * @param {StreamClient} stream the stream to comment, like, and subscribe to
   * @param {EventSubscription} subscription the initial subscription
   */
  constructor(
    private readonly client: CensusClient,
    private readonly stream: StreamClient,
    subscription: EventSubscription = {},
  ) {
    this.characters = new Set(subscription.characters);
    this.worlds = new Set(subscription.worlds);
    this.eventNames = new Set(subscription.eventNames);
    this.logicalAndCharactersWithWorlds =
      subscription.logicalAndCharactersWithWorlds ?? false;

    this.registerClientEvents();
  }

  /**
   * Registers important stream events
   */
  private registerClientEvents(): void {
    this.stream.on('ready', () => {
      this.client.emit('debug', `Subscribing to events`);

      void this.stream.send(this.subscription);
    });

    this.stream.on('message', message => {
      if ('subscription' in message)
        this.handleSubscription(message.subscription);
    });
  }

  /**
   * Make a subscription to the stream
   *
   * @param {EventSubscription} subscription
   */
  subscribe({
    characters,
    worlds,
    eventNames,
    logicalAndCharactersWithWorlds,
  }: EventSubscription): Promise<EventSubscribed | null> {
    characters?.forEach(character => this.characters.add(character));
    worlds?.forEach(world => this.worlds.add(world));
    eventNames?.forEach(eventName => this.eventNames.add(eventName));
    this.logicalAndCharactersWithWorlds =
      logicalAndCharactersWithWorlds ?? this.logicalAndCharactersWithWorlds;

    return this.updateSubscription({
      service: 'event',
      action: 'subscribe',
      characters,
      worlds,
      eventNames,
      logicalAndCharactersWithWorlds,
    });
  }

  /**
   * Remove a subscription from the stream
   *
   * @param {EventSubscription} subscription
   */
  unsubscribe({
    characters,
    worlds,
    eventNames,
    logicalAndCharactersWithWorlds,
  }: EventSubscription): Promise<EventSubscribed | null> {
    characters?.forEach(character => this.characters.delete(character));
    worlds?.forEach(world => this.worlds.delete(world));
    eventNames?.forEach(eventName => this.eventNames.delete(eventName));
    this.logicalAndCharactersWithWorlds =
      logicalAndCharactersWithWorlds ?? this.logicalAndCharactersWithWorlds;

    return this.updateSubscription({
      service: 'event',
      action: 'clearSubscribe',
      characters,
      worlds,
      eventNames,
      logicalAndCharactersWithWorlds,
    });
  }

  /**
   * Purge all subscriptions
   */
  unsubscribeAll(): Promise<EventSubscribed | null> {
    this.characters.clear();
    this.worlds.clear();
    this.eventNames.clear();
    this.logicalAndCharactersWithWorlds = false;

    return this.updateSubscription({
      service: 'event',
      action: 'clearSubscribe',
      all: 'true',
    });
  }

  /**
   * Rerun all subscriptions
   *
   * @param {boolean} reset When true unsubscribes from all events first
   * @return {Promise<boolean>} whether it has been run(depends on stream being ready)
   */
  async resubscribe(reset = false): Promise<boolean> {
    if (this.stream.isReady) {
      if (reset) await this.unsubscribeAll();

      await this.stream.send(this.subscription);

      return true;
    }

    return false;
  }

  /**
   * Handles incoming subscriptions so they can resolve a promise
   * Note: The assumption is made that the messages are send in order
   *
   * @param {EventSubscribed} subscription
   * @private
   */
  private handleSubscription(subscription: EventSubscribed): void {
    const [resolver] = this.subscriptionResponseQueue;

    if (resolver) {
      this.subscriptionResponseQueue.delete(resolver);

      resolver(subscription);
    }
  }

  /**
   * Update the event stream subscription
   *
   * @param {Subscribe | ClearSubscribe} command
   * @return {Promise<EventSubscribed>}
   * @private
   */
  private updateSubscription(
    command: Subscribe | ClearSubscribe,
  ): Promise<EventSubscribed | null> {
    return new Promise(resolve => {
      if (!this.stream.isReady) resolve(null);

      const closed = () => {
        this.subscriptionResponseQueue.delete(success);
      };

      const success = (subscription: EventSubscribed) => {
        this.stream.off('close', closed);
        resolve(subscription);
      };

      this.stream.once('close', closed);

      this.subscriptionResponseQueue.add(success);

      this.stream.send(command).catch();
    });
  }

  /**
   * Get current subscription
   *
   * @return {Subscribe}
   */
  private get subscription(): Subscribe {
    return {
      service: 'event',
      action: 'subscribe',
      characters: Array.from(this.characters),
      worlds: Array.from(this.worlds),
      eventNames: Array.from(this.eventNames),
      logicalAndCharactersWithWorlds: this.logicalAndCharactersWithWorlds,
    };
  }
}
