import { requestFactory } from '../utils/Helpers';
import loadout from '../types/loadout';

export type typeData = loadout;

export type query = Partial<{
    code_name: string,
    faction_id: string,
    loadout_id: string,
    profile_id: string
}>;

export type resolve = never;

export default requestFactory<'loadout'>('loadout');
