import { WorldEvent } from './base/world.event';

export class ContinentLock extends WorldEvent {
  readonly emit = 'continentLock';

  event_name: 'ContinentLock';
  event_type: string;
  metagame_event_id: string;
  nc_population: string;
  previous_faction: string;
  tr_population: string;
  triggering_faction: string;
  vs_population: string;

  toHash(): string {
    return `ContinentLock:${this.world_id}:${this.zone_id}:${this.timestamp}`;
  }
}
