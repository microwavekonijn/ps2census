import { requestFactory } from '../utils/requestHelpers';

export { reward as rewardFormat } from '../formats/reward';

export type rewardQuery = Partial<{
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
