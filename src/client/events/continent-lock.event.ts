import { WorldEvent } from './base/world.event';
import { PS2Events } from '../../stream';
import { Faction } from '../constants';
import { PS2Event } from './base/ps2.event';

export class ContinentLock extends WorldEvent<PS2Events.ContinentLock> {
  readonly emit = 'continentLock';

  readonly event_name: 'ContinentLock';
  readonly event_type: string;
  readonly metagame_event_id: string;
  readonly nc_population: number;
  readonly tr_population: number;
  readonly vs_population: number;
  readonly previous_faction: Faction;
  readonly triggering_faction: Faction;

  constructor(
    ...params: ConstructorParameters<typeof PS2Event<PS2Events.ContinentLock>>
  ) {
    super(...params);

    this.nc_population = Number.parseFloat(
      params[ContinentLock.DATA].nc_population,
    );
    this.tr_population = Number.parseFloat(
      params[ContinentLock.DATA].tr_population,
    );
    this.vs_population = Number.parseFloat(
      params[ContinentLock.DATA].vs_population,
    );
  }

  toHash(): string {
    return `ContinentLock:${this.world_id}:${this.zone_id}:${this.timestamp}`;
  }
}
