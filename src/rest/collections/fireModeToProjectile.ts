import { requestFactory } from '../utils/Helpers';
import fireModeToProjectile from '../types/fireModeToProjectile';

export type typeData = fireModeToProjectile;

export type query = Partial<{
    fire_mode_id: string,
    projectile_id: string
}>;

export type resolve = never;

export default requestFactory<'fire_mode_to_projectile'>('fire_mode_to_projectile');
