import { DefaultCollection } from '../types/collection';
import { fireModeToProjectile } from '../formats/fireModeToProjectile';

export interface FireModeToProjectile extends DefaultCollection {
    collection: 'fire_mode_to_projectile';

    format: fireModeToProjectile;

    conditions: Partial<{
        fire_mode_id: string,
        projectile_id: string
    }>;
}
