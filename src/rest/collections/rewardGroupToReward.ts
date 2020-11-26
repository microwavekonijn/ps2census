import { DefaultCollection } from '../types/collection';
import { rewardGroupToReward } from '../formats/rewardGroupToReward';

export interface RewardGroupToReward extends DefaultCollection {
    collection: 'reward_group_to_reward';

    format: rewardGroupToReward;

    conditions: Partial<{
        reward_group_id: string,
        reward_id: string
    }>;
}
