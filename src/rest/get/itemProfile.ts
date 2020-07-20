import { defineCensusType } from '../get';

export type itemProfileData = {
    item_id: string,
    profile_id: string,
};

export type itemProfileQuery = Partial<itemProfileData>

export default defineCensusType<itemProfileQuery, itemProfileData[]>('item_profile');
