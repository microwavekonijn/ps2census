import { requestFactory } from '../utils/requestHelpers';

export { rewardGroupToReward as rewardGroupToRewardFormat } from '../formats/rewardGroupToReward';

export type rewardGroupToRewardQuery = Partial<{
    reward_group_id: string,
    reward_id: string
}>;

export const rewardGroupToReward = requestFactory<'reward_group_to_reward'>('reward_group_to_reward');
