import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';
import { lang } from '../utils/Types';

export type typeData = {
    metagame_event_id: string,
    name: lang,
    description: lang,
    type: string,
    experience_bonus: string,
};

export type query = {
    description: string,
    'description.de': string,
    'description.en': string,
    'description.es': string,
    'description.fr': string,
    'description.it': string,
    'description.tr': string,
    experience_bonus: string,
    metagame_event_id: string,
    name: string,
    'name.de': string,
    'name.en': string,
    'name.es': string,
    'name.fr': string,
    'name.it': string,
    'name.tr': string,
    type: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('metagameEvent');
