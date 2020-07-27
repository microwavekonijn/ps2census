import { requestFactory } from '../utils/Helpers';
import characterDirectiveTier from '../types/characterDirectiveTier';

export type typeData = characterDirectiveTier;

export type query = Partial<{
    character_id: string,
    completion_time: string,
    completion_time_date: string,
    directive_tier_id: string,
    directive_tree_id: string
}>;

export default requestFactory<'characters_directive_tier'>('characters_directive_tier');
