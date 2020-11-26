import { DefaultCollection } from '../types/collection';
import { reward } from '../formats/reward';

export interface Reward extends DefaultCollection {
    collection: 'reward';

    format: reward;

    conditions: Partial<{
        count_max: string,
        count_min: string,
        param1: string,
        param2: string,
        param3: string,
        param4: string,
        param5: string,
        reward_id: string,
        reward_type_id: string
    }>;
}
