import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

export type typeData = {
    outfit_id: string,
    ordinal: string,
    name: string,
    description: string,
};

export type query = {
    description: string,
    name: string,
    ordinal: string,
    outfit_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('outfit_rank');
