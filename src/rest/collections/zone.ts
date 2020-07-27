import { requestFactory } from '../utils/Helpers';
import zone from '../types/zone';

export type typeData = zone;

export type query = Partial<{
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

export type resolve = never;

export default requestFactory<'zone'>('zone');
