import { defineCensusType } from './Base';

export type projectileData = {
    projectile_id: string,
    projectile_flight_type_id: string,
    speed: string,
    lifespan: string,
    drag: string,
    gravity: string,
};

export type projectileQuery = Partial<projectileData>

export default defineCensusType<projectileQuery, projectileData[]>('projectile');
