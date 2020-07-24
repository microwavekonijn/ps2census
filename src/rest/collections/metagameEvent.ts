import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import metagameEvent from '../types/metagameEvent';

export type typeData = metagameEvent;

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

export default requestFactory<operations, query, typeData[], commands, resolve>('metagame_event');
