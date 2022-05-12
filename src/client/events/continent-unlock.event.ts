import { PS2Event } from './ps2.event';

export class ContinentUnlock extends PS2Event {
  readonly emit = 'continentUnlock';

  event_name: 'ContinentUnlock';
  event_type: string;
  metagame_event_id: string;
  nc_population: string;
  previous_faction: string;
  tr_population: string;
  triggering_faction: string;
  vs_population: string;
  zone_id: string;

  toHash(): string {
    return `ContinentUnlock:${this.world_id}:${this.zone_id}:${this.timestamp}`;
  }
}
