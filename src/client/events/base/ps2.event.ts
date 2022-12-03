import { CensusClient, ClientEvents } from '../../census.client';
import { PS2Event as PS2EventPayload } from '../../../stream/types/ps2.events';
import { unixToDate } from '../../../utils/formatters';

export abstract class PS2Event<T extends PS2EventPayload> {
  protected static readonly DATA = 1;

  readonly emit: keyof ClientEvents;

  readonly event_name: T['event_name'];
  readonly timestamp: Date;
  readonly world_id: string;

  /**
   * @param {CensusClient} client
   * @param {PS2Event} raw
   */
  constructor(protected readonly client: CensusClient, readonly raw: T) {
    Object.assign(this, raw, { timestamp: unixToDate(raw.timestamp) });
  }

  /**
   * @return {string} hash of the event
   */
  abstract toHash(): string;
}
