import { lang } from '../types/response';

export type metagameEvent = {
    metagame_event_id: string,
    name: lang,
    description: lang,
    type: string,
    experience_bonus: string,
    [prop: string]: any,
};
