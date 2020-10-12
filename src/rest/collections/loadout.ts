import { requestFactory } from '../utils/requestHelpers';
import { loadout } from '../types/loadout';

export type typeData = loadout;

export type query = Partial<{
    code_name: string,
    faction_id: string,
    loadout_id: string,
    profile_id: string
}>;

export const loadout = requestFactory<'loadout'>('loadout');
