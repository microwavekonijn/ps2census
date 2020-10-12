import { PS2Event } from '../events/PS2Event';

export interface EventStreamFilter {
    filter(event: PS2Event): boolean;
}
