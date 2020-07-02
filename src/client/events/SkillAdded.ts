import BaseEvent from './BaseEvent';
import { SkillAdded as SkillAddedData } from '../utils/PS2Events';
import Client from '../Client';

export default class SkillAdded extends BaseEvent implements SkillAddedData {
    public readonly character_id: string;
    public readonly event_name: 'SkillAdded';
    public readonly skill_id: string;
    public readonly timestamp: string;
    public readonly world_id: string;
    public readonly zone_id: string;

    public constructor(
        private readonly client: Client,
        data: any,
    ) {
        super(data);
    }

    public toHash(): string {
        return '';
    }
}
