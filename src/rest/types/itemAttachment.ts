import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    item_id: string,
    attachment_item_id: string,
};

export type query = {
    attachment_item_id: string,
    item_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('itemAttachment');
