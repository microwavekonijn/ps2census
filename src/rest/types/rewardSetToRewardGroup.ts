import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    reward_set_id: string,
    reward_group_id: string,
};

export type query = {
    reward_group_id: string,
    reward_set_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('rewardSetToRewardGroup');
