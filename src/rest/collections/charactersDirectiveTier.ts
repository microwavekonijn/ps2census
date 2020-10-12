import { requestFactory } from '../utils/requestHelpers';
import { characterDirectiveTier } from '../types/characterDirectiveTier';

export type typeData = characterDirectiveTier;

export type query = Partial<{
    character_id: string,
    completion_time: string,
    completion_time_date: string,
    directive_tier_id: string,
    directive_tree_id: string
}>;

export const charactersDirectiveTier = requestFactory<'characters_directive_tier'>('characters_directive_tier');
