import { requestFactory } from '../utils/requestHelpers';

export { profileArmorMap as profileArmorMapFormat } from '../formats/profileArmorMap';

export type profileArmorMapQuery = Partial<{
    armor_info_id: string,
    profile_id: string,
    rank: string
}>;

export const profileArmorMap = requestFactory<'profile_armor_map'>('profile_armor_map');
