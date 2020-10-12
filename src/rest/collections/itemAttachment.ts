import { requestFactory } from '../utils/requestHelpers';

export { itemAttachment as itemAttachmentFormat } from '../formats/itemAttachment';

export type itemAttachmentQuery = Partial<{
    attachment_item_id: string,
    item_id: string
}>;

export const itemAttachment = requestFactory('item_attachment');
