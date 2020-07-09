import DuplicateFilter from './DuplicateFilter';
import { EventEmitter } from 'events';

export type PS2Environment = 'ps2' | 'ps2ps2us' | 'ps2ps4eu';

export type ClientConfig = {
    serviceId?: string,
    environment?: PS2Environment,
    streamManagerConfig?: EventStreamManagerConfig
}

export type EventStreamManagerConfig = {
    subscriptions?: EventStreamSubscription[],
    streamConfig?: EventStreamConfig,
}

export type EventStreamConfig = {
    environment?: PS2Environment,
    connectionTimeout?: number,
    heartbeatInterval?: number,
    duplicateFilter?: DuplicateFilter | null,
    emitter?: EventEmitter,
}

export type EventStreamSubscription = {
    characters: string[],
    worlds?: string[],
    eventNames: string[],
    logicalAndCharactersWithWorlds: boolean
} | {
    characters?: string[],
    worlds: string[],
    eventNames: string[],
    logicalAndCharactersWithWorlds: boolean
}
