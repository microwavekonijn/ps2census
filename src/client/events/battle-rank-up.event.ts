import { CharacterEvent } from './base/character.event';
import { PS2Events } from '../../stream';
import { PS2Event } from './base/ps2.event';

export class BattleRankUp extends CharacterEvent<PS2Events.BattleRankUp> {
  readonly emit = 'battleRankUp';

  readonly battle_rank: number;
  readonly event_name: 'BattleRankUp';

  constructor(
    ...params: ConstructorParameters<typeof PS2Event<PS2Events.BattleRankUp>>
  ) {
    super(...params);

    this.battle_rank = Number.parseInt(
      params[BattleRankUp.DATA].battle_rank,
      10,
    );
  }

  toHash(): string {
    return `BattleRankUp:${this.character_id}:${this.timestamp}:${this.battle_rank}`;
  }
}
