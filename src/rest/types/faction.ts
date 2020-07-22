import { requestFactory } from '../utils/Helpers';
import { commands, lang, operations } from '../utils/Types';

export type typeData = {
    faction_id: string,
    name: lang,
    code_tag: string,
    user_selectable: string,
};

export type query = {
    code_tag: string,
    faction_id: string,
    image_id: string,
    image_path: string,
    image_set_id: string,
    name: string,
    'name.de': string,
    'name.en': string,
    'name.es': string,
    'name.fr': string,
    'name.it': string,
    'name.tr': string,
    user_selectable: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('faction');
