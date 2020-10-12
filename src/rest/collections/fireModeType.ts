import { requestFactory } from '../utils/requestHelpers';
import { fireModeType } from '../types/fireModeType';

export type typeData = fireModeType;

export type query = Partial<{
    description: string,
    fire_mode_type_id: string
}>;

export const fireModeType = requestFactory<'fire_mode_type'>('fire_mode_type');
