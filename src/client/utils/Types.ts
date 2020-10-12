import { DuplicateFilter } from './DuplicateFilter';
import { EventEmitter } from 'events';
import { PS2Environment } from '../../utils/Types';
import { censusRequest } from '../../rest/utils/requestTypes';
import { Cache } from '../concerns/Cache';
import { PS2EventNames } from './PS2Events';
import { PS2Event } from '../events/PS2Event';
import { AchievementEarned } from '../events/AchievementEarned';
import { BattleRankUp } from '../events/BattleRankUp';
import { Death } from '../events/Death';
import { GainExperience } from '../events/GainExperience';
import { ItemAdded } from '../events/ItemAdded';
import { PlayerFacilityCapture } from '../events/PlayerFacilityCapture';
import { PlayerFacilityDefend } from '../events/PlayerFacilityDefend';
import { PlayerLogin } from '../events/PlayerLogin';
import { PlayerLogout } from '../events/PlayerLogout';
import { SkillAdded } from '../events/SkillAdded';
import { VehicleDestroy } from '../events/VehicleDestroy';
import { ContinentLock } from '../events/ContinentLock';
import { FacilityControl } from '../events/FacilityControl';
import { MetagameEvent } from '../events/MetagameEvent';

export type ClientConfig = {
    environment?: PS2Environment,
    streamManagerConfig?: EventStreamManagerConfig,
    characterManager?: {
        request?: censusRequest<'character'>,
        cache?: Cache,
    }
}

export type EventStreamManagerConfig = {
    subscription?: EventStreamSubscription,
    streamConfig?: EventStreamConfig,
}

export type EventStreamConfig = {
    environment?: PS2Environment,
    connectionTimeout?: number,
    heartbeatInterval?: number,
    duplicateFilter?: DuplicateFilter | null,
    emitter?: EventEmitter,
}

export type EventStreamSubscription = Partial<{
    characters: string[],
    worlds: string[],
    eventNames: ('all' | PS2EventNames)[],
    logicalAndCharactersWithWorlds?: boolean
}>

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

export type ClientEvents = {
    ready: [],
    disconnected: [],
    reconnecting: [],
    error: [Error],
    warn: [Error],
    debug: [string, string],
    duplicate: [PS2Event],
    subscribed: [EventStreamSubscribed],
    serviceState: [string, boolean],
    ps2Event: [PS2Event],
    achievementEarned: [AchievementEarned],
    battleRankUp: [BattleRankUp],
    death: [Death],
    gainExperience: [GainExperience],
    itemAdded: [ItemAdded],
    playerFacilityCapture: [PlayerFacilityCapture],
    playerFacilityDefend: [PlayerFacilityDefend],
    playerLogin: [PlayerLogin],
    playerLogout: [PlayerLogout],
    skillAdded: [SkillAdded],
    vehicleDestroy: [VehicleDestroy],
    continentLock: [ContinentLock],
    continentUnlock: [ContinentLock],
    facilityControl: [FacilityControl],
    metagameEvent: [MetagameEvent],
};
