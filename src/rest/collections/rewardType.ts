import { DefaultCollection } from '../types/collection';
import { rewardType } from '../formats/rewardType';

export interface RewardType extends DefaultCollection {
    collection: 'reward_type';

    format: rewardType;

    conditions: Partial<{
        count_max: string,
        count_min: string,
        description: string,
        param1: string,
        param2: string,
        param3: string,
        param4: string,
        param5: string,
        reward_type_id: string
    }>;
}
