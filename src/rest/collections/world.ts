import { requestFactory } from '../utils/Helpers';
import world from '../types/world';

export type typeData = world;

export type query = Partial<{
    // this API man...
    description_t4id: number, // integer
    name_t4id: number, // integer
    state: string,
    world_id: string,
}>;

export type resolve = never;

export default requestFactory<'world'>('world');
