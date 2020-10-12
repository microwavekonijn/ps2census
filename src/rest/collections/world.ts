import { requestFactory } from '../utils/requestHelpers';
import { world } from '../types/world';

export type typeData = world;

export type query = Partial<{
    // this API man...
    description_t4id: number, // integer
    name_t4id: number, // integer
    state: string,
    world_id: string,
}>;

export const world = requestFactory<'world'>('world');
