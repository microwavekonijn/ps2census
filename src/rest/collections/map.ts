import { map } from '../formats/map';

export interface Map {
    collection: 'map';

    format: map;

    conditions: {
        world_id: string,
        zone_ids: string
    };
}
