import { PS2Event } from './ps2.event';

export class FacilityControl extends PS2Event {
  readonly emit = 'facilityControl';

  readonly duration_held: string;
  readonly event_name: 'FacilityControl';
  readonly facility_id: string;
  readonly new_faction_id: string;
  readonly old_faction_id: string;
  readonly outfit_id: string;
  readonly zone_id: string;

  toHash(): string {
    return `FacilityControl:${this.world_id}:${this.timestamp}:${this.facility_id}`;
  }
}
