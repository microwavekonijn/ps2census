import { defineCensusType } from '../get';

export type zoneEffectData = {
    zone_effect_id: string,
    zone_effect_type_id: string,
    ability_id: string,
    param1: string,
    param2: string,
    param3: string,
    param4: string,
    param5: string,
    param6: string,
};

export type zoneEffectQuery = Partial<zoneEffectData>

export default defineCensusType<zoneEffectQuery, zoneEffectData[]>('zone_effect');
