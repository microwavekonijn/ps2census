import { lang } from '../utils/responseTypes';

export default metagameEvent;

type metagameEvent = {
    metagame_event_id: string,
    name: lang,
    description: lang,
    type: string,
    experience_bonus: string,
    [prop: string]: any,
};
