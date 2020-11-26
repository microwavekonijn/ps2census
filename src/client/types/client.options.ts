import { DuplicateFilter } from '../utils/duplicate-filter';
import { EventEmitter } from 'events';
import { PS2Environment } from '../../types/ps2.options';
import { CensusRequest } from '../../rest/types/request';
import { CacheContract } from '../concerns/cache.contract';
import { PS2EventNames } from './ps2.events';
import { PS2Event } from '../events/ps2.event';
import { AchievementEarned } from '../events/achievement-earned.event';
import { BattleRankUpEvent } from '../events/battle-rank-up.event';
import { Death } from '../events/death.event';
import { GainExperience } from '../events/gain-experience.event';
import { ItemAdded } from '../events/item-added.event';
import { PlayerFacilityCapture } from '../events/player-facility-capture.event';
import { PlayerFacilityDefend } from '../events/player-facility-defend.event';
import { PlayerLogin } from '../events/player-login.event';
import { PlayerLogout } from '../events/player-logout.event';
import { SkillAdded } from '../events/skill-added.event';
import { VehicleDestroy } from '../events/vehicle-destroy.event';
import { ContinentLock } from '../events/continent-lock.event';
import { FacilityControl } from '../events/facility-control.event';
import { MetagameEvent } from '../events/metagame.event';

export type ClientOptions = {
    environment?: PS2Environment,
    streamManagerConfig?: EventStreamManagerOptions,
    characterManager?: {
        request?: CensusRequest<'character'>,
        cache?: CacheContract,
    }
}

export type EventStreamManagerOptions = {
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
    battleRankUp: [BattleRankUpEvent],
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
