import { CharacterEvent } from './character.event';

export class GainExperience extends CharacterEvent {
  readonly emit = 'gainExperience';

  readonly amount: string;
  readonly event_name: 'GainExperience';
  readonly experience_id: string;
  readonly loadout_id: string;
  readonly other_id: string;
  readonly zone_id: string;

  /**
   * Fetch the character data of other if any
   *
   * @return {Promise<any | undefined>}
   */
  async other(): Promise<any | undefined> {
    if (this.other_id.length == 19)
      return this.client.characterManager.fetch(this.character_id);
  }

  toHash(): string {
    return `GainExperience:${this.character_id}:${this.timestamp}`;
  }
}
