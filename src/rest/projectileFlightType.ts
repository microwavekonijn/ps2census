import { defineCensusType } from './Base';

export type projectileFlightTypeData = {
    projectile_flight_type_id: string,
    description: string,
};

export type projectileFlightTypeQuery = Partial<projectileFlightTypeData>

export default defineCensusType<projectileFlightTypeQuery, projectileFlightTypeData[]>('projectile_flight_type');
