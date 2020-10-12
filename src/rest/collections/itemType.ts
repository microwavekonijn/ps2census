import { requestFactory } from '../utils/requestHelpers';

export { itemType as itemTypeFormat } from '../formats/itemType';

export type itemTypeQuery = Partial<{
    code: string,
    item_type_id: string,
    name: string
}>;

export const itemType = requestFactory<'item_type'>('item_type');
