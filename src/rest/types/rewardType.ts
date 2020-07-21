import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';


export type typeData = {
    reward_type_id: string,
    description: string,
    count_min: string,
    param1: string,
    param2: string,
    param3: string,
    param4: string,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<operations, query, typeData[], commands, resolve>('rewardType');

