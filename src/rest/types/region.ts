import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';
import { lang } from '../utils/Types';

export type typeData = {
    region_id: string,
    zone_id: string,
    initial_faction_id: string,
    name: lang,
};

export type query = {
    initial_faction_id: string,
    name: string,
    'name.de': string,
    'name.en': string,
    'name.es': string,
    'name.fr': string,
    'name.it': string,
    'name.tr': string,
    region_id: string,
    zone_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('region');
