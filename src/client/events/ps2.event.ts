import { CensusClient, ClientEvents } from '../census.client';
import { PS2EventData } from '../types/ps2.events';
import { unixToDate } from '../../utils/formatters';

export abstract class PS2Event<T extends PS2EventData = PS2EventData> {
  readonly emit: keyof ClientEvents;

  readonly event_name: string;
  readonly timestamp: Date;
  readonly world_id: string;

  /**
   * @param {CensusClient} client
   * @param {PS2EventData} raw
   */
  constructor(protected readonly client: CensusClient, readonly raw: T) {
    this.hydrateObject(raw);
  }

  /**
   * @param {PS2EventData} data
   * @private
   */
  private hydrateObject(data: T) {
    Object.assign(this, data, { timestamp: unixToDate(data.timestamp) });

    this.cast(data);
  }

  /**
   * Cast additional to formats
   *
   * @param data
   * @protected
   */
  protected cast(data: T): void {
    // void
  }

  /**
   * @return {string} hash of the event
   */
  abstract toHash(): string;
}
