import { requestFactory } from '../utils/Helpers';
import fireModeType from '../types/fireModeType';

export type typeData = fireModeType;

export type query = Partial<{
    description: string,
    fire_mode_type_id: string
}>;

export default requestFactory<'fire_mode_type'>('fire_mode_type');
