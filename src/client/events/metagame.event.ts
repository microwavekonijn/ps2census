import { WorldEvent } from './base/world.event';
import { PS2Events } from '../../stream';
import { PS2Event } from './base/ps2.event';

export class MetagameEvent extends WorldEvent<PS2Events.MetagameEvent> {
  readonly emit = 'metagameEvent';

  readonly event_name: 'MetagameEvent';
  readonly experience_bonus: string;
  readonly faction_nc: number;
  readonly faction_tr: number;
  readonly faction_vs: number;
  readonly metagame_event_id: string;
  readonly metagame_event_state: string;
  readonly metagame_event_state_name: string;
  readonly instance_id: string;

  constructor(
    ...params: ConstructorParameters<typeof PS2Event<PS2Events.MetagameEvent>>
  ) {
    super(...params);

    this.faction_nc = Number.parseFloat(params[MetagameEvent.DATA].faction_nc);
    this.faction_tr = Number.parseFloat(params[MetagameEvent.DATA].faction_tr);
    this.faction_vs = Number.parseFloat(params[MetagameEvent.DATA].faction_vs);
  }

  toHash(): string {
    return `MetagameEvent:${this.world_id}:${this.timestamp}`;
  }
}
