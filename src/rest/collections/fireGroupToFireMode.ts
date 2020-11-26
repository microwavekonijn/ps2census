import { DefaultCollection } from '../types/collection';
import { fireGroupToFireMode } from '../formats/fireGroupToFireMode';

export interface FireGroupToFireMode extends DefaultCollection {
    collection: 'fire_group_to_fire_mode';

    format: fireGroupToFireMode;

    conditions: Partial<{
        fire_group_id: string,
        fire_mode_id: string,
        fire_mode_index: string
    }>;
}
