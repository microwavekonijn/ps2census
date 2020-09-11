import { requestFactory } from '../utils/requestHelpers';
import projectileFlightType from '../types/projectileFlightType';

export type typeData = projectileFlightType;

export type query = Partial<{
    description: string,
    projectile_flight_type_id: string
}>;

export default requestFactory<'projectile_flight_type'>('projectile_flight_type');
