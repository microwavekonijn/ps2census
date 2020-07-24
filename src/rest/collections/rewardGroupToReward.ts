import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import rewardGroupToReward from '../types/rewardGroupToReward';

export type typeData = rewardGroupToReward;

export type query = Partial<{
    reward_group_id: string,
    reward_id: string
}>;

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('reward_group_to_reward');
