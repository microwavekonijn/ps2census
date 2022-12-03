import { WorldEvent } from './base/world.event';
import { PS2Events } from '../../stream';
import { Faction } from '../constants';
import { PS2Event } from './base/ps2.event';

export class ContinentUnlock extends WorldEvent<PS2Events.ContinentUnlock> {
  readonly emit = 'continentUnlock';

  event_name: 'ContinentUnlock';
  event_type: string;
  metagame_event_id: string;
  nc_population: number;
  tr_population: number;
  vs_population: number;
  previous_faction: Faction;
  triggering_faction: Faction;

  constructor(
    ...params: ConstructorParameters<typeof PS2Event<PS2Events.ContinentUnlock>>
  ) {
    super(...params);

    this.nc_population = Number.parseFloat(
      params[ContinentUnlock.DATA].nc_population,
    );
    this.tr_population = Number.parseFloat(
      params[ContinentUnlock.DATA].tr_population,
    );
    this.vs_population = Number.parseFloat(
      params[ContinentUnlock.DATA].vs_population,
    );
  }

  toHash(): string {
    return `ContinentUnlock:${this.world_id}:${this.zone_id}:${this.timestamp}`;
  }
}
