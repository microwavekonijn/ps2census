import { Lang } from '../types/response';

export interface metagameEvent  {
    metagame_event_id: string;
    name: Lang;
    description: Lang;
    type: string;
    experience_bonus: string;
    [prop: string]: unkown;
}
