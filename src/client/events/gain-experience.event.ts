import { CharacterEvent } from './base/character.event';
import { PS2Events } from '../../stream';

export class GainExperience extends CharacterEvent<PS2Events.GainExperience> {
  readonly emit = 'gainExperience';

  readonly amount: string;
  readonly event_name: 'GainExperience';
  readonly experience_id: string;
  readonly loadout_id: string;
  readonly other_id: string;
  readonly team_id: string;

  /**
   * Fetch the character data of other if any
   *
   * @return {Promise<any | undefined>}
   */
  async other<T>(): Promise<T | undefined> {
    if (this.other_id.length == 19)
      return this.client.characterManager.fetch(this.character_id);

    return Promise.resolve(undefined);
  }

  toHash(): string {
    return `GainExperience:${this.character_id}:${this.timestamp}`;
  }
}
