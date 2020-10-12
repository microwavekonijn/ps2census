import { requestFactory } from '../utils/requestHelpers';

export { itemProfile as itemProfileFormat } from '../formats/itemProfile';

export type itemProfileQuery = Partial<{
    item_id: string,
    profile_id: string
}>;

export const itemProfile = requestFactory('item_profile');
