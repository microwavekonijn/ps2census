import { EventEmitter } from 'eventemitter3';
import { StreamManagerOptions, StreamManager } from './stream.manager';
import { PS2Environment } from '../types/ps2.options';
import { RestClient, RestClientOptions } from '../rest/rest.client';
import { CharacterManager, CharacterManagerOptions } from './managers';
import {
  AchievementEarned,
  BattleRankUpEvent,
  ContinentLock,
  Death,
  FacilityControl,
  GainExperience,
  ItemAdded,
  MetagameEvent,
  PlayerFacilityCapture,
  PlayerFacilityDefend,
  PlayerLogin,
  PlayerLogout,
  PS2Event,
  SkillAdded,
  VehicleDestroy,
} from './events';
import { EventSubscribed, EventSubscription } from './types';

export interface ClientOptions {
  streamManager?: StreamManagerOptions;
  rest?: Omit<RestClientOptions, 'serviceId'>;
  characterManager?: CharacterManagerOptions;
}

export type ClientEvents = {
  ready: () => void;
  disconnected: (code?: number, reason?: string) => void;
  reconnecting: () => void;
  error: (err: Error) => void;
  warn: (err: Error) => void;
  debug: (info: string) => void;
  duplicate: (event: PS2Event) => void;
  subscribed: (subscription: EventSubscribed) => void;
  serviceState: (detail: string, online: boolean) => void;
  ps2Event: (event: PS2Event) => void;
  achievementEarned: (event: AchievementEarned) => void;
  battleRankUp: (event: BattleRankUpEvent) => void;
  death: (event: Death) => void;
  gainExperience: (event: GainExperience) => void;
  itemAdded: (event: ItemAdded) => void;
  playerFacilityCapture: (event: PlayerFacilityCapture) => void;
  playerFacilityDefend: (event: PlayerFacilityDefend) => void;
  playerLogin: (event: PlayerLogin) => void;
  playerLogout: (event: PlayerLogout) => void;
  skillAdded: (event: SkillAdded) => void;
  vehicleDestroy: (event: VehicleDestroy) => void;
  continentLock: (event: ContinentLock) => void;
  continentUnlock: (event: ContinentLock) => void;
  facilityControl: (event: FacilityControl) => void;
  metagameEvent: (event: MetagameEvent) => void;
};

export class CensusClient extends EventEmitter<ClientEvents> {
  /**
   * @type{StreamManager?} the event stream manager
   */
  private readonly streamManager: StreamManager;

  /**
   * @type {RestClient} Client to fetch data from the Rest API
   */
  readonly rest: RestClient;

  /**
   * @type {CharacterManager} The character manager for Census API requests
   */
  readonly characterManager: CharacterManager;

  /**
   * @param {string} serviceId service Id for the Census API
   * @param {PS2Environment} environment the environment the client is configured for
   * @param {ClientOptions} config
   */
  constructor(
    readonly serviceId: string,
    readonly environment: PS2Environment,
    { streamManager, rest, characterManager }: ClientOptions = {},
  ) {
    super();

    this.serviceId = serviceId;

    this.rest = new RestClient(environment, { serviceId, ...rest });

    this.characterManager = new CharacterManager(this, characterManager);

    this.streamManager = new StreamManager(this, streamManager);
  }

  /**
   * Start watching the event stream
   *
   * @return {Promise<void>}
   */
  async watch(): Promise<void> {
    await this.streamManager.connect();
  }

  /**
   * Doom and destruction, WUHAHAHAHA!
   */
  destroy(): void {
    this.streamManager?.disconnect();
  }

  /**
   * Make a subscription to the stream
   *
   * @param {EventSubscription} subscription
   * @return {Promise<EventSubscribed | null>}
   */
  subscribe(subscription: EventSubscription): Promise<EventSubscribed | null> {
    return this.streamManager.subscriptionManager.subscribe(subscription);
  }

  /**
   * Remove a subscription from the stream
   *
   * @param {EventSubscription} subscription
   * @return {Promise<EventSubscribed | null>}
   */
  unsubscribe(
    subscription: EventSubscription,
  ): Promise<EventSubscribed | null> {
    return this.streamManager.subscriptionManager.unsubscribe(subscription);
  }

  /**
   * Purge all subscriptions
   *
   * @return {Promise<EventSubscribed | null>}
   */
  unsubscribeAll(): Promise<EventSubscribed | null> {
    return this.streamManager.subscriptionManager.unsubscribeAll();
  }

  /**
   * Rerun all subscriptions
   *
   * @param {boolean} reset When true unsubscribes to all events first
   * @return {Promise<boolean>} whether it has been run(depends on stream being ready)
   */
  resubscribe(reset = false): Promise<boolean> {
    return this.streamManager.subscriptionManager.resubscribe(reset);
  }
}
