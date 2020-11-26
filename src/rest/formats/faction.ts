import { Lang } from '../types/response';

export interface faction  {
    faction_id: string;
    name: Lang;
    image_set_id: string;
    image_id: string;
    image_path: string;
    code_tag: string;
    user_selectable: string;
    [prop: string]: unknown;
}
