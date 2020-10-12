import { requestFactory } from '../utils/requestHelpers';

export { weaponToAttachment as weaponToAttachmentFormat } from '../formats/weaponToAttachment';

export type weaponToAttachmentQuery = Partial<{
    attachment_id: string,
    item_id: string,
    weapon_group_id: string
}>;

export const weaponToAttachment = requestFactory<'weapon_to_attachment'>('weapon_to_attachment');
