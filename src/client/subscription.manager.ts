import { CensusClient } from './census.client';
import { StreamClient } from '../stream/stream.client';
import { PS2EventNames } from '../stream/types/ps2.events';
import { EventSubscribed, EventSubscription } from './types';
import { CommandHandler } from './command.handler';
import { StreamResponseException } from './exceptions/stream-response.exception';

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
  private readonly eventNames: Set<
    'all' | PS2EventNames | `GainExperience_experience_id_${number}`
  >;

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

      try {
        await this.commandHandler.subscribe(this.subscription);
      } catch (err) {
        if (!(err instanceof StreamResponseException)) throw err;
      }
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
   * Verifies if the subscription matches with what is expected
   *
   * @return {Promise<boolean>} whether the subscription is correct
   */
  async verifySubscription(): Promise<boolean> {
    const subscription = await this.commandHandler.subscribe({});

    if (
      this.logicalAndCharactersWithWorlds !=
      subscription.logicalAndCharactersWithWorlds
    )
      return false;

    if (this.characters.has('all')) {
      if (!('characters' in subscription)) return false;
    } else {
      if (
        !('characterCount' in subscription) ||
        subscription.characterCount != this.characters.size
      )
        return false;
    }

    for (const world of this.worlds) {
      if (!subscription.worlds.some(id => world == id)) return false;
    }

    for (const event of this.eventNames) {
      if (!subscription.eventNames.some(name => event == name)) return false;
    }

    return true;
  }

  /**
   * Rerun all subscriptions
   *
   * @param {boolean} reset When true unsubscribes from all events first
   * @return {Promise<boolean>} whether it has been run(depends on stream being ready)
   */
  async resubscribe(reset = false): Promise<boolean> {
    if (this.stream.isReady) {
      if (reset) await this.commandHandler.clearSubscribeAll();

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
