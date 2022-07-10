import { WorldEvent } from './base/world.event';

export class ContinentUnlock extends WorldEvent {
  readonly emit = 'continentUnlock';

  event_name: 'ContinentUnlock';
  event_type: string;
  metagame_event_id: string;
  nc_population: string;
  previous_faction: string;
  tr_population: string;
  triggering_faction: string;
  vs_population: string;

  toHash(): string {
    return `ContinentUnlock:${this.world_id}:${this.zone_id}:${this.timestamp}`;
  }
}
