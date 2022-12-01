import { CharacterEvent } from './base/character.event';
import { PS2Events } from '../../stream';

export class BattleRankUpEvent extends CharacterEvent<PS2Events.BattleRankUp> {
  readonly emit = 'battleRankUp';

  readonly battle_rank: string;
  readonly event_name: 'BattleRankUp';

  toHash(): string {
    return `BattleRankUp:${this.character_id}:${this.timestamp}:${this.battle_rank}`;
  }
}
