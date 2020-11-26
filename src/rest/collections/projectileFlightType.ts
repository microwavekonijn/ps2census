import { DefaultCollection } from '../types/collection';
import { projectileFlightType } from '../formats/projectileFlightType';

export interface ProjectileFlightType extends DefaultCollection {
    collection: 'projectile_flight_type';

    format: projectileFlightType;

    conditions: Partial<{
        description: string,
        projectile_flight_type_id: string
    }>;
}
