import { PS2Event } from './ps2.event';

export abstract class ZoneEvent extends PS2Event {
  readonly zone_id: string;

  get zoneDefinitionId(): number {
    return Number.parseInt(this.zone_id, 10) & 0x0000ffff;
  }

  get zoneInstanceId(): number {
    return (Number.parseInt(this.zone_id, 10) & 0xffff0000) >>> 16;
  }
}
