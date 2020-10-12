import { requestFactory } from '../utils/requestHelpers';

export { characterWorld as charactersWorldFormat } from '../formats/characterWorld';

export type charactersWorldQuery = Partial<{
    character_id: string,
    world_id: string
}>;

export const charactersWorld = requestFactory<'characters_world'>('characters_world');
