import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import rewardSetToRewardGroup from '../types/rewardSetToRewardGroup';

export type typeData = rewardSetToRewardGroup;

export type query = {
    reward_group_id: string,
    reward_set_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('reward_set_to_reward_group');
