import { lang } from '../types/response';

export type faction = {
    faction_id: string,
    name: lang,
    image_set_id: string,
    image_id: string,
    image_path: string,
    code_tag: string,
    user_selectable: string,
    [prop: string]: any,
};
