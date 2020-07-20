import { defineCensusType } from '../get';
import { lang } from '../types/lang';

export type metagameEventData = {
    metagame_event_id: string,
    name: lang,
    description: lang,
    type: string,
    experience_bonus: string,
};

export type metagameEventQuery = Partial<metagameEventData>

export default defineCensusType<metagameEventQuery, metagameEventData[]>('metagame_event');
