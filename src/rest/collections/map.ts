import { requestFactory } from '../utils/requestHelpers';

export { map as mapFormat } from '../formats/map';

export type mapQuery = {
    world_id: string,
    zone_ids: string
};

export const map = requestFactory('map');
