import BaseEvent from './BaseEvent';
import { BattleRankUp as BattleRankUpData } from '../utils/PS2Events';

export default class BattleRankUp extends BaseEvent implements BattleRankUpData {
    public readonly battle_rank: string;
    public readonly character_id: string;
    public readonly event_name: 'BattleRankUp';
    public readonly timestamp: string;
    public readonly world_id: string;
    public readonly zone_id: string;

    public toHash(): string {
        return '';
    }
}
