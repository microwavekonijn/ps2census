import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

export type typeData = {
    weapon_group_id: string,
    attachment_id: string,
    item_id: string,
};

export type query = {
    attachment_id: string,
    item_id: string,
    weapon_group_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('weapon_to_attachment');
