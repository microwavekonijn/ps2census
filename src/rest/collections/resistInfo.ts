import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import resistInfo from '../types/resistInfo';

export type typeData = resistInfo;

export type query = {
    description: string,
    multiplier_when_headshot: string,
    resist_amount: string,
    resist_info_id: string,
    resist_percent: string,
    resist_type_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('resist_info');
