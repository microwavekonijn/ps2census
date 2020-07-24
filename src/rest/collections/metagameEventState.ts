import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import metagameEventState from '../types/metagameEventState';

export type typeData = metagameEventState;

export type query = {
    metagame_event_state_id: string,
    name: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('metagame_event_state');
