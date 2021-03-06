import { DefaultCollection } from '../types/collection';
import { effect } from '../formats/effect';

export interface Effect extends DefaultCollection {
    collection: 'effect';

    format: effect;

    conditions: Partial<{
        ability_id: string,
        duration_seconds: string,
        effect_id: string,
        effect_type_id: string,
        is_drain: string,
        param1: string,
        param10: string,
        param11: string,
        param12: string,
        param13: string,
        param2: string,
        param3: string,
        param4: string,
        param5: string,
        param6: string,
        param7: string,
        param8: string,
        param9: string,
        resist_type_id: string,
        target_type_id: string
    }>;
}
