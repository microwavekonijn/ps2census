import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

export type typeData = {
    resist_type_id: string,
    description: string,
};

export type query = {
    description: string,
    resist_type_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('resistType');
