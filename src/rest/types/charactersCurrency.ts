import { baseOperations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    character_id: string,
    currency_id: string,
    currency_name: string,
    quantity: string,
    prestige_currency: string,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<query, typeData[], baseOperations, resolve>('charactersCurrency');

