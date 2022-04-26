import { Events } from '../constants/client.constants';
import { CharacterEvent } from './character.event';

export class BattleRankUpEvent extends CharacterEvent {
  readonly emit = Events.PS2_RANK_UP;

  readonly battle_rank: string;
  readonly event_name: 'BattleRankUp';
  readonly zone_id: string;

  toHash(): string {
    return `BattleRankUp:${this.character_id}:${this.timestamp}:${this.battle_rank}`;
  }
}
