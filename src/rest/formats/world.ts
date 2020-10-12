import { lang } from '../types/response';

export type world = {
    world_id: string,
    state: string,
    name: lang,
    description: lang,
    [prop: string]: any,
};
