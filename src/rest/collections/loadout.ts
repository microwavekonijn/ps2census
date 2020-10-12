import { requestFactory } from '../utils/requestHelpers';

export { loadout as loadoutFormat } from '../formats/loadout';

export type loadoutQuery = Partial<{
    code_name: string,
    faction_id: string,
    loadout_id: string,
    profile_id: string
}>;

export const loadout = requestFactory('loadout');
