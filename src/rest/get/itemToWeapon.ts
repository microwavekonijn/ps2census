import { defineCensusType } from '../get';

export type itemToWeaponData = {
    item_id: string,
    weapon_id: string,
};

export type itemToWeaponQuery = Partial<itemToWeaponData>

export default defineCensusType<itemToWeaponQuery, itemToWeaponData[]>('item_to_weapon');
