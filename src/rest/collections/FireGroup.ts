export type FireGroup = {
  collection: 'fire_group';
  format: {
    fire_group_id: string;
    chamber_duration_ms: string;
    transition_duration_ms: string;
    spool_up_ms: string;
    spool_up_initial_refire_ms: string;
    can_chamber_ironsights: string;
  };
  paths:
    | 'fire_group_id'
    | 'chamber_duration_ms'
    | 'transition_duration_ms'
    | 'spool_up_ms'
    | 'spool_up_initial_refire_ms'
    | 'can_chamber_ironsights';
  partialPaths:
    | 'fire_group_id'
    | 'chamber_duration_ms'
    | 'transition_duration_ms'
    | 'spool_up_ms'
    | 'spool_up_initial_refire_ms'
    | 'can_chamber_ironsights';
  conditions: {
    can_chamber_ironsights?: string;
    chamber_duration_ms?: string;
    fire_group_id?: string;
    spool_up_initial_refire_ms?: string;
    spool_up_ms?: string;
    transition_duration_ms?: string;
  };
};
