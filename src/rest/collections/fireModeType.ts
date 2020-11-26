import { DefaultCollection } from '../types/collection';
import { fireModeType } from '../formats/fireModeType';

export interface FireModeType extends DefaultCollection {
    collection: 'fire_mode_type';

    format: fireModeType;

    conditions: Partial<{
        description: string,
        fire_mode_type_id: string
    }>;
}
