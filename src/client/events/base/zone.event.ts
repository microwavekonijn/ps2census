import { PS2Event } from './ps2.event';
import { PS2Event as PS2EventPayload } from '../../../stream';

export abstract class ZoneEvent<T extends PS2EventPayload> extends PS2Event<T> {
  readonly zone_id: string;

  get zoneDefinitionId(): number {
    return Number.parseInt(this.zone_id, 10) & 0x0000ffff;
  }

  get zoneInstanceId(): number {
    return (Number.parseInt(this.zone_id, 10) & 0xffff0000) >>> 16;
  }
}
