import { defineCensusType } from '../get';

export type fireModeToProjectileData = {
    fire_mode_id: string,
    projectile_id: string,
};

export type fireModeToProjectileQuery = Partial<fireModeToProjectileData>

export default defineCensusType<fireModeToProjectileQuery, fireModeToProjectileData[]>('fire_mode_to_projectile');
