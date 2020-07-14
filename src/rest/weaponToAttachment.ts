import { defineCensusType } from './Base';

export type weaponToAttachmentData = {
    weapon_group_id: string,
    attachment_id: string,
    item_id: string,
};

export type weaponToAttachmentQuery = Partial<weaponToAttachmentData>

export default defineCensusType<weaponToAttachmentQuery, weaponToAttachmentData[]>('weapon_to_attachment');
