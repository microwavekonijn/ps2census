import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

export type typeData = {
    reward_group_id: string,
    reward_id: string,
};

export type query = {
    reward_group_id: string,
    reward_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('rewardGroupToReward');
