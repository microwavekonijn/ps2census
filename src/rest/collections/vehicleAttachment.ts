import { requestFactory } from '../utils/requestHelpers';

export { vehicleAttachment as vehicleAttachmentFormat } from '../formats/vehicleAttachment';

export type vehicleAttachmentQuery = Partial<{
    description: string,
    faction_id: string,
    item_id: string,
    slot_id: string,
    vehicle_id: string
}>;

export const vehicleAttachment = requestFactory<'vehicle_attachment'>('vehicle_attachment');
