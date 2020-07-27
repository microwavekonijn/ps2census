import { requestFactory } from '../utils/Helpers';
import rewardSetToRewardGroup from '../types/rewardSetToRewardGroup';

export type typeData = rewardSetToRewardGroup;

export type query = Partial<{
    reward_group_id: string,
    reward_set_id: string
}>;

export type resolve = never;

export default requestFactory<'reward_set_to_reward_group'>('reward_set_to_reward_group');
