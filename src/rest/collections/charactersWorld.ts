import { requestFactory } from '../utils/requestHelpers';
import { characterWorld } from '../types/characterWorld';

export type typeData = characterWorld;

export type query = Partial<{
    character_id: string,
    world_id: string
}>;

export const charactersWorld = requestFactory<'characters_world'>('characters_world');
