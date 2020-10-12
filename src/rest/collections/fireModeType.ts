import { requestFactory } from '../utils/requestHelpers';

export { fireModeType as fireModeTypeFormat } from '../formats/fireModeType';

export type fireModeTypeQuery = Partial<{
    description: string,
    fire_mode_type_id: string
}>;

export const fireModeType = requestFactory('fire_mode_type');
