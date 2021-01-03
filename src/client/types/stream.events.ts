import { PS2EventNames } from './ps2.events';

export type EventStreamSubscribed = {
    characterCount: number,
    worlds: string[],
    eventNames: ('all' | PS2EventNames)[],
    logicalAndCharactersWithWorlds: boolean
} | {
    characters: ['all'],
    worlds: string[],
    eventNames: ('all' | PS2EventNames)[],
    logicalAndCharactersWithWorlds: boolean
}
