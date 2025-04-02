import { CharacterEvent } from './base/character.event';
import { PS2Events } from '../../stream';
import { Faction } from '../constants';

export class FishScan extends CharacterEvent<PS2Events.FishScan> {
  readonly emit = 'fishScan';

  readonly event_name: 'FishScan';
  readonly fish_id: string;
  readonly loadout_id: string;
  readonly team_id: Faction;

  toHash(): string {
    return `FishScan:${this.character_id}:${this.fish_id}:${this.timestamp}`;
  }
}
