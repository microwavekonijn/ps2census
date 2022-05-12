import { PS2Event } from './ps2.event';

export class MetagameEvent extends PS2Event {
  readonly emit = 'metagameEvent';

  readonly event_name: 'MetagameEvent';
  readonly experience_bonus: string;
  readonly faction_nc: string;
  readonly faction_tr: string;
  readonly faction_vs: string;
  readonly metagame_event_id: string;
  readonly metagame_event_state: string;
  readonly metagame_event_state_name: string;
  readonly instance_id: string;
  readonly zone_id: string;

  get zoneDefinitionId(): number {
    return Number.parseInt(this.zone_id, 10) & 0x0000ffff;
  }

  get zoneInstanceId(): number {
    return (Number.parseInt(this.zone_id, 10) & 0xffff0000) >> 16;
  }

  toHash(): string {
    return `MetagameEvent:${this.world_id}:${this.timestamp}`;
  }
}
