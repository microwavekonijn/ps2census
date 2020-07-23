import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

export type typeData = {
    reward_set_id: string,
    reward_group_id: string,
};

export type query = {
    reward_group_id: string,
    reward_set_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('reward_set_to_reward_group');
