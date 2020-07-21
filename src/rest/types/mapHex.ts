import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';


export type typeData = {
    zone_id: string,
    map_region_id: string,
    x: string,
    y: string,
    hex_type: string,
    type_name: string,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<operations, query, typeData[], commands, resolve>('mapHex');

