import { PS2Event } from './ps2.event';

export abstract class CharacterEvent extends PS2Event {
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
