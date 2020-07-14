import { defineCensusType } from '../Base';

export type loadoutData = {
    loadout_id: string,
    profile_id: string,
    faction_id: string,
    code_name: string,
};

export type loadoutQuery = Partial<loadoutData>

export default defineCensusType<loadoutQuery, loadoutData[]>('loadout');
