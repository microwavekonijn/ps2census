import { requestFactory } from '../utils/requestHelpers';

export { projectileFlightType as projectileFlightTypeFormat } from '../formats/projectileFlightType';

export type projectileFlightTypeQuery = Partial<{
    description: string,
    projectile_flight_type_id: string
}>;

export const projectileFlightType = requestFactory<'projectile_flight_type'>('projectile_flight_type');
