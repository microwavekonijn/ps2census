export type ProjectileFlightType = {
  collection: 'projectile_flight_type';
  format: { projectile_flight_type_id: string; description: string };
  paths: 'projectile_flight_type_id' | 'description';
  partialPaths: 'projectile_flight_type_id' | 'description';
  conditions: { description?: string; projectile_flight_type_id?: string };
};
