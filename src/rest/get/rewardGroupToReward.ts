import { defineCensusType } from '../get';

export type rewardGroupToRewardData = {
    reward_group_id: string,
    reward_id: string,
};

export type rewardGroupToRewardQuery = Partial<rewardGroupToRewardData>

export default defineCensusType<rewardGroupToRewardQuery, rewardGroupToRewardData[]>('reward_group_to_reward');
