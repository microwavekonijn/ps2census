import { defineCensusType } from './Base';

export type charactersWorldData = {
    character_id: string,
    world_id: string
};

export default defineCensusType<Partial<charactersWorldData>, charactersWorldData[]>('characters_world');
