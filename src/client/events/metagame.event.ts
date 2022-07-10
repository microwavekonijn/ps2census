import { WorldEvent } from './base/world.event';

export class MetagameEvent extends WorldEvent {
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

  toHash(): string {
    return `MetagameEvent:${this.world_id}:${this.timestamp}`;
  }
}
