import { DefaultCollection } from '../types/collection';
import { weaponToFireGroup } from '../formats/weaponToFireGroup';

export interface WeaponToFireGroup extends DefaultCollection {
    collection: 'weapon_to_fire_group';

    format: weaponToFireGroup;

    conditions: Partial<{
        fire_group_id: string,
        fire_group_index: string,
        weapon_id: string
    }>;
}
