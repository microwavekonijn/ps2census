import PS2Event from '../events/PS2Event';

export default interface EventStreamFilter {
    filter(event: PS2Event): boolean;
}
