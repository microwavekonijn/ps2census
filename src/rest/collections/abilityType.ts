import { DefaultCollection } from '../types/collection';
import { abilityType } from '../formats/abilityType';

export interface AbilityType extends DefaultCollection {
    collection: 'ability_type';

    format: abilityType;

    conditions: Partial<{
        ability_type_id: string,
        description: string,
        param1: string,
        param2: string,
        param3: string,
        param4: string,
        param5: string,
        param6: string,
        param7: string,
        param8: string,
        param9: string,
        param10: string,
        param11: string,
        param12: string,
        param13: string,
        param14: string,
        string1: string,
        string2: string,
        string3: string,
        string4: string
    }>;
}
