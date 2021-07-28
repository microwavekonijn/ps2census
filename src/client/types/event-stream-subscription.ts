import {PS2EventNames} from './ps2.events';

export interface EventStreamSubscription {
    characters?: string[],
    worlds?: string[],
    eventNames?: ('all' | PS2EventNames)[],
    logicalAndCharactersWithWorlds?: boolean
}
