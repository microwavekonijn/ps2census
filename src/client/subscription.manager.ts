import { CensusClient } from './census.client';
import { StreamClient } from '../stream/stream.client';
import { PS2EventNames } from '../stream/types/ps2.events';
import { EventSubscribed, EventSubscription } from './types';
import { CommandHandler } from './command.handler';

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
   * @param {CensusClient} client the client used to emit debug events
   * @param {StreamClient} stream the stream to comment, like, and subscribe to
   * @param {CommandHandler} commandHandler handles rpc of the stream
   * @param {EventSubscription} subscription the initial subscription
   */
  constructor(
    private readonly client: CensusClient,
    private readonly stream: StreamClient,
    private readonly commandHandler: CommandHandler,
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
    this.stream.on('ready', async () => {
      this.client.emit('debug', `Subscribing to events`);

      await this.commandHandler.subscribe(this.subscription);
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
  }: EventSubscription): Promise<EventSubscribed> {
    characters?.forEach(character => this.characters.add(character));
    worlds?.forEach(world => this.worlds.add(world));
    eventNames?.forEach(eventName => this.eventNames.add(eventName));
    this.logicalAndCharactersWithWorlds =
      logicalAndCharactersWithWorlds ?? this.logicalAndCharactersWithWorlds;

    return this.commandHandler.subscribe({
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
  }: EventSubscription): Promise<EventSubscribed> {
    characters?.forEach(character => this.characters.delete(character));
    worlds?.forEach(world => this.worlds.delete(world));
    eventNames?.forEach(eventName => this.eventNames.delete(eventName));
    this.logicalAndCharactersWithWorlds =
      logicalAndCharactersWithWorlds ?? this.logicalAndCharactersWithWorlds;

    return this.commandHandler.clearSubscribe({
      characters,
      worlds,
      eventNames,
      logicalAndCharactersWithWorlds,
    });
  }

  /**
   * Purge all subscriptions
   */
  async unsubscribeAll(): Promise<void> {
    this.characters.clear();
    this.worlds.clear();
    this.eventNames.clear();
    this.logicalAndCharactersWithWorlds = false;

    await this.commandHandler.clearSubscribeAll();
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

      await this.commandHandler.subscribe(this.subscription);

      return true;
    }

    return false;
  }

  /**
   * Get current subscription
   *
   * @return {Subscribe}
   */
  private get subscription(): EventSubscription {
    return {
      characters: Array.from(this.characters),
      worlds: Array.from(this.worlds),
      eventNames: Array.from(this.eventNames),
      logicalAndCharactersWithWorlds: this.logicalAndCharactersWithWorlds,
    };
  }
}
