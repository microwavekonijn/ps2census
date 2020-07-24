import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import loadout from '../types/loadout';

export type typeData = loadout;

export type query = {
    code_name: string,
    faction_id: string,
    loadout_id: string,
    profile_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('loadout');
