import { WorldEvent } from './base/world.event';
import { PS2Events } from '../../stream';
import { Faction } from '../constants';
import { PS2Event } from './base/ps2.event';

export class FacilityControl extends WorldEvent<PS2Events.FacilityControl> {
  readonly emit = 'facilityControl';

  readonly duration_held: number;
  readonly event_name: 'FacilityControl';
  readonly facility_id: string;
  readonly new_faction_id: Faction;
  readonly old_faction_id: Faction;
  readonly outfit_id: string;

  constructor(
    ...params: ConstructorParameters<typeof PS2Event<PS2Events.FacilityControl>>
  ) {
    super(...params);

    this.duration_held = Number.parseInt(
      params[FacilityControl.DATA].duration_held,
      10,
    );
  }

  toHash(): string {
    return `FacilityControl:${this.world_id}:${this.timestamp}:${this.facility_id}`;
  }
}
