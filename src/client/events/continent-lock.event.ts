import { PS2Event } from './ps2.event';
import { Events } from '../constants/client.constants';

export class ContinentLock extends PS2Event {
  readonly emit = Events.PS2_LOCK;

  event_name: 'ContinentLock';
  event_type: string;
  metagame_event_id: string;
  nc_population: string;
  previous_faction: string;
  tr_population: string;
  triggering_faction: string;
  vs_population: string;
  zone_id: string;

  toHash(): string {
    return `ContinentLock:${this.world_id}:${this.zone_id}:${this.timestamp}`;
  }
}
