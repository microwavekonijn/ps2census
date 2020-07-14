import { defineCensusType } from '../Base';

export type itemAttachmentData = {
    item_id: string,
    attachment_item_id: string,
};

export type itemAttachmentQuery = Partial<itemAttachmentData>

export default defineCensusType<itemAttachmentQuery, itemAttachmentData[]>('item_attachment');
