import { ZoneEvent, ZoneEventPayload } from './zone.event';

export type CharacterEventPayload = Extract<
  ZoneEventPayload,
  { character_id: string }
>;

export abstract class CharacterEvent<
  T extends CharacterEventPayload,
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
