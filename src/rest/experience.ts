import { defineCensusType } from './Base';

export type experienceData = {
    experience_id: string,
    description: string,
    xp: string
};

export default defineCensusType<Partial<experienceData>, experienceData[]>('experience');
