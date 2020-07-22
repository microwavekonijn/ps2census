import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    resist_info_id: string,
    resist_type_id: string,
    resist_percent: string,
    multiplier_when_headshot: string,
    description: string,
};

export type query = {
    description: string,
    multiplier_when_headshot: string,
    resist_amount: string,
    resist_info_id: string,
    resist_percent: string,
    resist_type_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('resistInfo');
