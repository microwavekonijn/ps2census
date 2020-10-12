import { requestFactory } from '../utils/requestHelpers';

export { region as regionFormat } from '../formats/region';

export type regionQuery = Partial<{
    initial_faction_id: string,
    name: string,
    'name.de': string,
    'name.en': string,
    'name.es': string,
    'name.fr': string,
    'name.it': string,
    'name.tr': string,
    region_id: string,
    zone_id: string
}>;

export const region = requestFactory('region');
