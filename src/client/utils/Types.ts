import DuplicateFilter from './DuplicateFilter';
import { EventEmitter } from 'events';

export type PS2Environment = 'ps2' | 'ps2ps2us' | 'ps2ps4eu';

export type ClientConfig = {
    serviceId?: string,
    environment?: PS2Environment
}

export type EventStreamConfig = {
    environment?: PS2Environment,
    connectionTimeout?: number,
    heartbeatInterval?: number,
    subscriptions?: EventStreamSubscription[],
    duplicateFilter?: DuplicateFilter | null,
    emitter?: EventEmitter,
}

export type EventStreamSubscription = {
    characters: string[],
    worlds?: string[],
    eventNames: string[]
} | {
    characters?: string[],
    worlds: string[],
    eventNames: string[]
}
