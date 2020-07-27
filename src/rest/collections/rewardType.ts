import { requestFactory } from '../utils/Helpers';
import rewardType from '../types/rewardType';

export type typeData = rewardType;

export type query = Partial<{
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

export type resolve = never;

export default requestFactory<'reward_type'>('reward_type');
