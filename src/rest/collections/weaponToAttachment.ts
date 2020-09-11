import { requestFactory } from '../utils/requestHelpers';
import weaponToAttachment from '../types/weaponToAttachment';

export type typeData = weaponToAttachment;

export type query = Partial<{
    attachment_id: string,
    item_id: string,
    weapon_group_id: string
}>;

export default requestFactory<'weapon_to_attachment'>('weapon_to_attachment');
