import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

export type typeData = {
    metagame_event_state_id: string,
    name: string,
};

export type query = {
    metagame_event_state_id: string,
    name: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('metagameEventState');
