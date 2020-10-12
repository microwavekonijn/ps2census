import { requestFactory } from '../utils/requestHelpers';

export { rewardSetToRewardGroup as rewardSetToRewardGroupFormat } from '../formats/rewardSetToRewardGroup';

export type rewardSetToRewardGroupQuery = Partial<{
    reward_group_id: string,
    reward_set_id: string
}>;

export const rewardSetToRewardGroup = requestFactory('reward_set_to_reward_group');
