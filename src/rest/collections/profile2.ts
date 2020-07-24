import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import profile2 from '../types/profile2';

export type typeData = profile2;

export type query = Partial<{
    description: string,
    profile_id: string
}>;

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('profile_2');
