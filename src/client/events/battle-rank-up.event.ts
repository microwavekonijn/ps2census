import { CharacterEvent } from './character.event';

export class BattleRankUpEvent extends CharacterEvent {
  readonly emit = 'battleRankUp';

  readonly battle_rank: string;
  readonly event_name: 'BattleRankUp';
  readonly zone_id: string;

  toHash(): string {
    return `BattleRankUp:${this.character_id}:${this.timestamp}:${this.battle_rank}`;
  }
}
