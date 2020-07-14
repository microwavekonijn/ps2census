import { defineCensusType } from './Base';

export type charactersWorldData = {
    character_id: string,
    world_id: string,
};

export type charactersWorldQuery = Partial<charactersWorldData>

export default defineCensusType<charactersWorldQuery, charactersWorldData[]>('characters_world');
