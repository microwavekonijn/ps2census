import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';
import { lang } from '../utils/Types';

export type typeData = {
    zone_id: string,
    code: string,
    hex_size: string,
    name: lang,
    description: lang,
};

export type query = {
    code: string,
    description: string,
    'description.de': string,
    'description.en': string,
    'description.es': string,
    'description.fr': string,
    'description.it': string,
    'description.tr': string,
    hex_size: string,
    name: string,
    'name.de': string,
    'name.en': string,
    'name.es': string,
    'name.fr': string,
    'name.it': string,
    'name.tr': string,
    zone_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('zone');
