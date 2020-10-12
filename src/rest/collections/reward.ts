import { requestFactory } from '../utils/requestHelpers';
import { reward } from '../types/reward';

export type typeData = reward;

export type query = Partial<{
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

export const reward = requestFactory<'reward'>('reward');
