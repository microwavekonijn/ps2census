/** Character centric events */

export type AchievementEarnedData = {
  event_name: 'AchievementEarned';
  character_id: string;
  timestamp: string;
  world_id: string;
  achievement_id: string;
  zone_id: string;
};

export type BattleRankUpData = {
  battle_rank: string;
  character_id: string;
  event_name: 'BattleRankUp';
  timestamp: string;
  world_id: string;
  zone_id: string;
};

export type DeathData = {
  attacker_character_id: string;
  attacker_fire_mode_id: string;
  attacker_loadout_id: string;
  attacker_vehicle_id: string;
  attacker_weapon_id: string;
  character_id: string;
  character_loadout_id: string;
  event_name: 'Death';
  // is_critical: string,
  is_headshot: string;
  timestamp: string;
  // vehicle_id: string,
  world_id: string;
  zone_id: string;
};

export type GainExperienceData = {
  amount: string;
  character_id: string;
  event_name: 'GainExperience';
  experience_id: string;
  loadout_id: string;
  other_id: string;
  timestamp: string;
  world_id: string;
  zone_id: string;
};

export type ItemAddedData = {
  character_id: string;
  context: string;
  event_name: 'ItemAdded';
  item_count: string;
  item_id: string;
  timestamp: string;
  world_id: string;
  zone_id: string;
};

export type PlayerFacilityCaptureData = {
  character_id: string;
  event_name: 'PlayerFacilityCapture';
  facility_id: string;
  outfit_id: string;
  timestamp: string;
  world_id: string;
  zone_id: string;
};

export type PlayerFacilityDefendData = {
  character_id: string;
  event_name: 'PlayerFacilityDefend';
  facility_id: string;
  outfit_id: string;
  timestamp: string;
  world_id: string;
  zone_id: string;
};

export type PlayerLoginData = {
  character_id: string;
  event_name: 'PlayerLogin';
  timestamp: string;
  world_id: string;
};

export type PlayerLogoutData = {
  character_id: string;
  event_name: 'PlayerLogout';
  timestamp: string;
  world_id: string;
};

export type SkillAddedData = {
  character_id: string;
  event_name: 'SkillAdded';
  skill_id: string;
  timestamp: string;
  world_id: string;
  zone_id: string;
};

export type VehicleDestroyData = {
  attacker_character_id: string;
  attacker_loadout_id: string;
  attacker_vehicle_id: string;
  attacker_weapon_id: string;
  character_id: string;
  event_name: 'VehicleDestroy';
  facility_id: string;
  faction_id: string;
  timestamp: string;
  vehicle_id: string;
  world_id: string;
  zone_id: string;
};

/** World centric events */

export type ContinentLockData = {
  event_name: 'ContinentLock';
  event_type: string;
  metagame_event_id: string;
  nc_population: string;
  previous_faction: string;
  timestamp: string;
  tr_population: string;
  triggering_faction: string;
  vs_population: string;
  world_id: string;
  zone_id: string;
};

export type ContinentUnlockData = {
  event_name: 'ContinentUnlock';
  event_type: string;
  metagame_event_id: string;
  nc_population: string;
  previous_faction: string;
  timestamp: string;
  tr_population: string;
  triggering_faction: string;
  vs_population: string;
  world_id: string;
  zone_id: string;
};

export type FacilityControlData = {
  duration_held: string;
  event_name: 'FacilityControl';
  facility_id: string;
  new_faction_id: string;
  old_faction_id: string;
  outfit_id: string;
  timestamp: string;
  world_id: string;
  zone_id: string;
};

export type MetagameEventData = {
  event_name: 'MetagameEvent';
  experience_bonus: string;
  faction_nc: string;
  faction_tr: string;
  faction_vs: string;
  metagame_event_id: string;
  metagame_event_state: string;
  metagame_event_state_name: string; // Added
  timestamp: string;
  world_id: string;
  instance_id: string;
};

export type PS2Events = {
  AchievementEarned: AchievementEarnedData;
  BattleRankUp: BattleRankUpData;
  Death: DeathData;
  GainExperience: GainExperienceData;
  ItemAdded: ItemAddedData;
  PlayerFacilityCapture: PlayerFacilityCaptureData;
  PlayerFacilityDefend: PlayerFacilityDefendData;
  PlayerLogin: PlayerLoginData;
  PlayerLogout: PlayerLogoutData;
  SkillAdded: SkillAddedData;
  VehicleDestroy: VehicleDestroyData;
  ContinentLock: ContinentLockData;
  ContinentUnlock: ContinentUnlockData;
  FacilityControl: FacilityControlData;
  MetagameEvent: MetagameEventData;
};

export type PS2EventNames = keyof PS2Events;

export type PS2EventData =
  | AchievementEarnedData
  | BattleRankUpData
  | DeathData
  | GainExperienceData
  | ItemAddedData
  | PlayerFacilityCaptureData
  | PlayerFacilityDefendData
  | PlayerLoginData
  | PlayerLogoutData
  | SkillAddedData
  | VehicleDestroyData
  | ContinentLockData
  | ContinentUnlockData
  | FacilityControlData
  | MetagameEventData;
