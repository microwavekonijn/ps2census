import { WorldEvent } from './base/world.event';
import { PS2Events } from '../../stream';

export class FacilityControl extends WorldEvent<PS2Events.FacilityControl> {
  readonly emit = 'facilityControl';

  readonly duration_held: string;
  readonly event_name: 'FacilityControl';
  readonly facility_id: string;
  readonly new_faction_id: string;
  readonly old_faction_id: string;
  readonly outfit_id: string;

  toHash(): string {
    return `FacilityControl:${this.world_id}:${this.timestamp}:${this.facility_id}`;
  }
}
