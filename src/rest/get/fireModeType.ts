import { defineCensusType } from '../get';

export type fireModeTypeData = {
    fire_mode_type_id: string,
    description: string,
};

export type fireModeTypeQuery = Partial<fireModeTypeData>

export default defineCensusType<fireModeTypeQuery, fireModeTypeData[]>('fire_mode_type');
