import { baseOperations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';


export type typeData = {
    resist_info_id: string,
    resist_type_id: string,
    resist_percent: string,
    multiplier_when_headshot: string,
    description: string,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<query, typeData[], baseOperations, resolve>('resistInfo');

