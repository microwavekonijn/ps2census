import { requestFactory } from '../utils/requestHelpers';

export { zone as zoneFormat } from '../formats/zone';

export type zoneQuery = Partial<{
    code: string,
    description: string,
    'description.de': string,
    'description.en': string,
    'description.es': string,
    'description.fr': string,
    'description.it': string,
    'description.tr': string,
    hex_size: string,
    name: string,
    'name.de': string,
    'name.en': string,
    'name.es': string,
    'name.fr': string,
    'name.it': string,
    'name.tr': string,
    zone_id: string
}>;

export const zone = requestFactory<'zone'>('zone');
