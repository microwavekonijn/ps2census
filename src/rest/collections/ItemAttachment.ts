export type ItemAttachment = {
  collection: 'item_attachment';
  format: { item_id: string; attachment_item_id: string };
  paths: 'item_id' | 'attachment_item_id';
  partialPaths: 'item_id' | 'attachment_item_id';
  conditions: { attachment_item_id?: string; item_id?: string };
};
