import { defineCensusType } from '../Base';

export type characterNameData = {
    character_id: string,
    name: {
        first: string,
        first_lower: string,
    },
};

export type characterNameQuery = Partial<characterNameData>

export default defineCensusType<characterNameQuery, characterNameData[]>('character_name');
