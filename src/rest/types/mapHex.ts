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

export type query = {
    hex_type: string,
    map_region_id: string,
    type_name: string,
    x: string,
    y: string,
    zone_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('mapHex');
