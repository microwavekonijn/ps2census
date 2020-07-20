import { defineCensusType } from '../get';

export type itemTypeData = {
    item_type_id: string,
    name: string,
    code: string,
};

export type itemTypeQuery = Partial<itemTypeData>

export default defineCensusType<itemTypeQuery, itemTypeData[]>('item_type');
