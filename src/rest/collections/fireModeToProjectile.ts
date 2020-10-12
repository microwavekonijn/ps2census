import { requestFactory } from '../utils/requestHelpers';

export { fireModeToProjectile as fireModeToProjectileFormat } from '../formats/fireModeToProjectile';

export type fireModeToProjectileQuery = Partial<{
    fire_mode_id: string,
    projectile_id: string
}>;

export const fireModeToProjectile = requestFactory('fire_mode_to_projectile');
