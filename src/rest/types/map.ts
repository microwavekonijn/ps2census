import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    ZoneId: string,
    Regions: {
        IsList: string,
        Row: {
            RowData: {
                RegionId: string,
                FactionId: string,
            },
        }[],
    },
};

export type query = {
    world_id: string,
    zone_ids: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('map');
