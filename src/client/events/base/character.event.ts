import { ZoneEvent } from './zone.event';
import { PS2Event as PS2EventPayload } from '../../../stream';

export abstract class CharacterEvent<
  T extends PS2EventPayload,
> extends ZoneEvent<T> {
  readonly character_id: string;

  /**
   * Fetch the character data
   *
   * @return {Promise<any>}
   */
  character<T = any>(): Promise<T> {
    return this.client.characterManager.fetch(this.character_id);
  }
}
