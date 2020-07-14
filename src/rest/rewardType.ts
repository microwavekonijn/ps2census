import { defineCensusType } from './Base';

export type rewardTypeData = {
    reward_type_id: string,
    description: string,
    count_min: string,
    param1: string,
    param2: string,
    param3: string,
    param4: string,
};

export type rewardTypeQuery = Partial<rewardTypeData>

export default defineCensusType<rewardTypeQuery, rewardTypeData[]>('reward_type');
