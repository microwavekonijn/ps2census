import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import rewardType from '../types/rewardType';

export type typeData = rewardType;

export type query = {
    count_max: string,
    count_min: string,
    description: string,
    param1: string,
    param2: string,
    param3: string,
    param4: string,
    param5: string,
    reward_type_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('reward_type');
