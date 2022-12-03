import { ZoneEvent, ZoneEventPayload } from './zone.event';

export abstract class WorldEvent<
  T extends ZoneEventPayload,
> extends ZoneEvent<T> {}
