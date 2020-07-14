import { defineCensusType } from './Base';

export type experienceData = {
    experience_id: string,
    description: string,
    xp: string,
};

export type experienceQuery = Partial<experienceData>

export default defineCensusType<experienceQuery, experienceData[]>('experience');
