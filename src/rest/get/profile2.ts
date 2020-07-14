import { defineCensusType } from '../Base';

export type profile2Data = {
    profile_id: string,
    description: string,
};

export type profile2Query = Partial<profile2Data>

export default defineCensusType<profile2Query, profile2Data[]>('profile_2');
