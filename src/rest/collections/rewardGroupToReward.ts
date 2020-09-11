import { requestFactory } from '../utils/requestHelpers';
import rewardGroupToReward from '../types/rewardGroupToReward';

export type typeData = rewardGroupToReward;

export type query = Partial<{
    reward_group_id: string,
    reward_id: string
}>;

export default requestFactory<'reward_group_to_reward'>('reward_group_to_reward');
