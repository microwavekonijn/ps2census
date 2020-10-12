import { requestFactory } from '../utils/requestHelpers';

export { rewardType as rewardTypeFormat } from '../formats/rewardType';

export type rewardTypeQuery = Partial<{
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

export const rewardType = requestFactory('reward_type');
