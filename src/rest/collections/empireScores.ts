import { requestFactory } from '../utils/requestHelpers';
import { empireScore } from '../types/empireScore';

export type typeData = empireScore;

export type query = Partial<{
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

export const empireScores = requestFactory<'empire_scores'>('empire_scores');
