export type FireModeToProjectile = {
  collection: 'fire_mode_to_projectile';
  format: { fire_mode_id: string; projectile_id: string };
  paths: 'fire_mode_id' | 'projectile_id';
  partialPaths: 'fire_mode_id' | 'projectile_id';
  conditions: { fire_mode_id?: string; projectile_id?: string };
};
