import { PS2Event } from './ps2.event';
import { PS2Event as PS2EventPayload } from '../../../stream';

export abstract class CharacterWorldEvent<
  T extends PS2EventPayload,
> extends PS2Event<T> {
  readonly character_id: string;

  /**
   * Fetch the character data
   *
   * @return {Promise<any>}
   */
  character(): Promise<any> {
    return this.client.characterManager.fetch(this.character_id);
  }
}
