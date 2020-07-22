import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';
import { lang } from '../utils/Types';

export type typeData = {
    title_id: string,
    name: lang,
};

export type query = {
    name: string,
    'name.de': string,
    'name.en': string,
    'name.es': string,
    'name.fr': string,
    'name.it': string,
    'name.tr': string,
    title_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('title');
