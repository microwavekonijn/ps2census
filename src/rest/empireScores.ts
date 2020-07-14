import { defineCensusType } from './Base';
import { lang } from './types/base';

export type empireScoresData = {
    tracker_name: string,
    tracker_description: string,
    start_date: string,
    start_time: string,
    end_date: string,
    end_time: string,
    name: lang
};

export default defineCensusType<Partial<empireScoresData>, empireScoresData[]>('empire_scores');
