import { defineCensusType } from '../Base';
import { lang } from '../types/base';

export type factionData = {
    faction_id: string,
    name: lang,
    code_tag: string,
    user_selectable: string,
};

export type factionQuery = Partial<factionData>

export default defineCensusType<factionQuery, factionData[]>('faction');
