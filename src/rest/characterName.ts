import { defineCensusType } from './Base';

export type characterNameData = {
};

export default defineCensusType<Partial<characterNameData>, characterNameData[]>('character_name');
