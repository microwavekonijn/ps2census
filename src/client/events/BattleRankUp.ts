import { BattleRankUpData } from '../utils/PS2Events';
import { Events } from '../utils/Constants';
import CharacterEvent from './CharacterEvent';

export default class BattleRankUp extends CharacterEvent implements BattleRankUpData {
    public readonly emit = Events.PS2_RANKUP;

    public readonly battle_rank: string;
    public readonly event_name: 'BattleRankUp';
    public readonly zone_id: string;

    public toHash(): string {
        return `BattleRankUp:${this.character_id}:${this.timestamp}:${this.battle_rank}`;
    }
}
