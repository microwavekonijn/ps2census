import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import fireModeType from '../types/fireModeType';

export type typeData = fireModeType;

export type query = Partial<{
    description: string,
    fire_mode_type_id: string
}>;

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('fire_mode_type');
