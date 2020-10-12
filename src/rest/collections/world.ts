import { requestFactory } from '../utils/requestHelpers';

export { world as worldFormat } from '../formats/world';

export type worldQuery = Partial<{
    // this API man...
    description_t4id: number, // integer
    name_t4id: number, // integer
    state: string,
    world_id: string,
}>;

export const world = requestFactory<'world'>('world');
