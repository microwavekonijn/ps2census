import { PS2Environment } from '../../types/ps2.options';
import { DuplicateFilter } from '../utils/duplicate-filter';
import { EventEmitter } from 'events';
import { PS2EventNames } from './ps2.events';

export interface EventStreamManagerOptions {
    subscription?: EventStreamSubscription;
    streamConfig?: EventStreamConfig;
}

export interface EventStreamConfig {
    environment?: PS2Environment;
    connectionTimeout?: number;
    heartbeatInterval?: number;
    duplicateFilter?: DuplicateFilter | null;
    emitter?: EventEmitter;
}

export type EventStreamSubscription = Partial<{
    characters: string[],
    worlds: string[],
    eventNames: ('all' | PS2EventNames)[],
    logicalAndCharactersWithWorlds?: boolean
}>
