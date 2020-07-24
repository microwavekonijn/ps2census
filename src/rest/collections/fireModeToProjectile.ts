import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import fireModeToProjectile from '../types/fireModeToProjectile';

export type typeData = fireModeToProjectile;

export type query = Partial<{
    fire_mode_id: string,
    projectile_id: string
}>;

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('fire_mode_to_projectile');
