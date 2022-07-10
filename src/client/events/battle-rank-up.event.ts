import { CharacterEvent } from './base/character.event';

export class BattleRankUpEvent extends CharacterEvent {
  readonly emit = 'battleRankUp';

  readonly battle_rank: string;
  readonly event_name: 'BattleRankUp';

  toHash(): string {
    return `BattleRankUp:${this.character_id}:${this.timestamp}:${this.battle_rank}`;
  }
}
