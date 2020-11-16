import { Events } from '../constants/client.constants';
import { CharacterEvent } from './character.event';

export class BattleRankUpEvent extends CharacterEvent {
    public readonly emit = Events.PS2_RANKUP;

    public readonly battle_rank: string;
    public readonly event_name: 'BattleRankUp';
    public readonly zone_id: string;

    public toHash(): string {
        return `BattleRankUp:${this.character_id}:${this.timestamp}:${this.battle_rank}`;
    }
}
