import { defineCensusType } from '../get';

export type rewardData = {
    reward_id: string,
    reward_type_id: string,
    count_min: string,
    count_max: string,
    param1: string,
};

export type rewardQuery = Partial<rewardData>

export default defineCensusType<rewardQuery, rewardData[]>('reward');
