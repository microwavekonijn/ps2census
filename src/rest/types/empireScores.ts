import { baseOperations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';
import { lang } from '../utils/Types';

export type typeData = {
    tracker_name: string,
    tracker_description: string,
    start_date: string,
    start_time: string,
    end_date: string,
    end_time: string,
    name: lang,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<query, typeData[], baseOperations, resolve>('empireScores');

