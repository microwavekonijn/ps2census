import { ZoneEvent } from './zone.event';

export abstract class CharacterEvent extends ZoneEvent {
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
