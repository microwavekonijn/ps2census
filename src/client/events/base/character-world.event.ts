import { PS2Event } from './ps2.event';
import { PS2Event as PS2EventPayload } from '../../../stream';

export type CharacterWorldEventPayload = Extract<
  PS2EventPayload,
  { character_id: string }
>;

export abstract class CharacterWorldEvent<
  T extends CharacterWorldEventPayload,
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
