import { PS2Event } from '../events/base/ps2.event';

export interface StreamFilterContract {
  filter(event: PS2Event): boolean;
}
