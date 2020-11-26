import { DefaultCollection } from '../types/collection';
import { rewardSetToRewardGroup } from '../formats/rewardSetToRewardGroup';

export interface RewardSetToRewardGroup extends DefaultCollection {
    collection: 'reward_set_to_reward_group';

    format: rewardSetToRewardGroup;

    conditions: Partial<{
        reward_group_id: string,
        reward_set_id: string
    }>;
}
