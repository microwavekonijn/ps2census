import { DefaultCollection } from '../types/collection';
import { empireScore } from '../formats/empireScore';

export interface EmpireScores extends DefaultCollection {
    collection: 'empire_scores';

    format: empireScore;

    conditions: Partial<{
        description: string,
        'description.de': string,
        'description.en': string,
        'description.es': string,
        'description.fr': string,
        'description.it': string,
        'description.tr': string,
        end_date: string,
        end_time: string,
        name: string,
        'name.de': string,
        'name.en': string,
        'name.es': string,
        'name.fr': string,
        'name.it': string,
        'name.tr': string,
        start_date: string,
        start_time: string,
        tracker_description: string,
        tracker_name: string
    }>;
}
