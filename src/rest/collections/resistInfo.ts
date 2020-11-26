import { DefaultCollection } from '../types/collection';
import { resistInfo } from '../formats/resistInfo';

export interface ResistInfo extends DefaultCollection {
    collection: 'resist_info';

    format: resistInfo;

    conditions: Partial<{
        description: string,
        multiplier_when_headshot: string,
        resist_amount: string,
        resist_info_id: string,
        resist_percent: string,
        resist_type_id: string
    }>;
}
