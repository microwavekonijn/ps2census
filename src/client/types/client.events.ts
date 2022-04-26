import {
  AchievementEarned,
  BattleRankUpEvent,
  ContinentLock,
  Death,
  FacilityControl,
  GainExperience,
  ItemAdded,
  MetagameEvent,
  PlayerFacilityCapture,
  PlayerFacilityDefend,
  PlayerLogin,
  PlayerLogout,
  PS2Event,
  SkillAdded,
  VehicleDestroy,
} from '../events';
import { EventStreamSubscribed } from './stream.events';

export type ClientEvents = {
  ready: [];
  disconnected: [number?, string?];
  reconnecting: [];
  error: [Error];
  warn: [Error];
  debug: [string, string];
  duplicate: [PS2Event];
  subscribed: [EventStreamSubscribed];
  serviceState: [string, boolean];
  ps2Event: [PS2Event];
  achievementEarned: [AchievementEarned];
  battleRankUp: [BattleRankUpEvent];
  death: [Death];
  gainExperience: [GainExperience];
  itemAdded: [ItemAdded];
  playerFacilityCapture: [PlayerFacilityCapture];
  playerFacilityDefend: [PlayerFacilityDefend];
  playerLogin: [PlayerLogin];
  playerLogout: [PlayerLogout];
  skillAdded: [SkillAdded];
  vehicleDestroy: [VehicleDestroy];
  continentLock: [ContinentLock];
  continentUnlock: [ContinentLock];
  facilityControl: [FacilityControl];
  metagameEvent: [MetagameEvent];
};
