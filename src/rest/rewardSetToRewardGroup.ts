import { defineCensusType } from './Base';

export type rewardSetToRewardGroupData = {
    reward_set_id: string,
    reward_group_id: string,
};

export type rewardSetToRewardGroupQuery = Partial<rewardSetToRewardGroupData>

export default defineCensusType<rewardSetToRewardGroupQuery, rewardSetToRewardGroupData[]>('reward_set_to_reward_group');
