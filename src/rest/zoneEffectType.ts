import { defineCensusType } from './Base';

export type zoneEffectTypeData = {
    zone_effect_type_id: string,
    description: string,
    param1: string,
    param2: string,
    param3: string,
    param4: string,
    param5: string,
    param6: string,
};

export type zoneEffectTypeQuery = Partial<zoneEffectTypeData>

export default defineCensusType<zoneEffectTypeQuery, zoneEffectTypeData[]>('zone_effect_type');
