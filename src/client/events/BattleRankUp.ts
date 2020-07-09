import PS2Event from './PS2Event';
import { BattleRankUp as BattleRankUpData } from '../utils/PS2Events';
import { Events } from '../..';

export default class BattleRankUp extends PS2Event implements BattleRankUpData {
    public readonly emit = Events.PS2_RANKUP;

    public readonly battle_rank: string;
    public readonly character_id: string;
    public readonly event_name: 'BattleRankUp';
    public readonly timestamp: string;
    public readonly world_id: string;
    public readonly zone_id: string;

    public toHash(): string {
        return `BattleRankUp:${this.character_id}:${this.timestamp}:${this.battle_rank}`;
    }
}
