import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import weaponToAttachment from '../types/weaponToAttachment';

export type typeData = weaponToAttachment;

export type query = {
    attachment_id: string,
    item_id: string,
    weapon_group_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('weapon_to_attachment');
