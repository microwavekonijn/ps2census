import { DefaultCollection } from '../types/collection';
import { weaponToAttachment } from '../formats/weaponToAttachment';

export interface WeaponToAttachment extends DefaultCollection {
    collection: 'weapon_to_attachment';

    format: weaponToAttachment;

    conditions: Partial<{
        attachment_id: string,
        item_id: string,
        weapon_group_id: string
    }>;
}
