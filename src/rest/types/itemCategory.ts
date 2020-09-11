import { lang } from '../utils/responseTypes';

export default itemCategory;

type itemCategory = {
    item_category_id: string,
    name: lang,
    [prop: string]: any,
};
