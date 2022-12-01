import { ZoneEvent } from './zone.event';
import { PS2Event as PS2EventPayload } from '../../../stream';

export abstract class WorldEvent<
  T extends PS2EventPayload,
> extends ZoneEvent<T> {}
