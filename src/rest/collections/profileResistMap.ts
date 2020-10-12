import { requestFactory } from '../utils/requestHelpers';

export { profileResistMap as profileResistMapFormat } from '../formats/profileResistMap';

export type profileResistMapQuery = Partial<{
    profile_id: string,
    rank: string,
    resist_info_id: string
}>;

export const profileResistMap = requestFactory('profile_resist_map');
