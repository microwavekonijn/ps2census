import { StreamHandlerContract as EventStreamHandlerContract } from './concerns/stream-handler.contract';
import { PS2EventData } from './types/ps2.events';
import { StreamFilterContract } from './concerns/stream-filter.contract';
import { PS2Event } from './events/ps2.event';
import { Client } from './census.client';
import { Events } from './constants/client.constants';
import { endpointsToId } from './constants/ps2.constants';

import { AchievementEarned } from './events/achievement-earned.event';
import { BattleRankUpEvent } from './events/battle-rank-up.event';
import { ContinentLock } from './events/continent-lock.event';
import { ContinentUnlock } from './events/continent-unlock.event';
import { Death } from './events/death.event';
import { FacilityControl } from './events/facility-control.event';
import { GainExperience } from './events/gain-experience.event';
import { ItemAdded } from './events/item-added.event';
import { MetagameEvent } from './events/metagame.event';
import { PlayerFacilityCapture } from './events/player-facility-capture.event';
import { PlayerFacilityDefend } from './events/player-facility-defend.event';
import { PlayerLogin } from './events/player-login.event';
import { PlayerLogout } from './events/player-logout.event';
import { SkillAdded } from './events/skill-added.event';
import { VehicleDestroy } from './events/vehicle-destroy.event';
import { stringToBoolean } from '../utils/formatters';

export class StreamHandler implements EventStreamHandlerContract {
    public static endpointsToId = endpointsToId;

    /**
     * @param {Client} client
     * @param {StreamFilterContract} filter
     */
    public constructor(
        private readonly client: Client,
        private readonly filter: StreamFilterContract,
    ) {
    }

    /**
     * Handles the event
     *
     * @param {PS2EventData} event
     */
    public handleEvent(event: PS2EventData): void {
        const wrapped = this.wrapEvent(event);

        if (!this.filter.filter(wrapped)) {
            setImmediate(() => {
                this.client.emit(Events.PS2_EVENT, wrapped);
                this.client.emit(wrapped.emit, wrapped);
            });
        } else {
            setImmediate(() => {
                this.client.emit(Events.PS2_DUPLICATE, wrapped);
            });
        }
    }

    /**
     * Handler whenever a subscription notification comes in
     *
     * @param subscription
     */
    public handleSubscription(subscription: any): void {
        setImmediate(() => {
            this.client.emit(Events.PS2_SUBSCRIBED, subscription);
        });
    }

    /**
     * Handler whenever a service state changed notification comes in
     *
     * @param state
     */
    public handleServerStateChanged(state: any): void {
        const id = StreamHandler.endpointsToId.get(state.detail);

        if (id) {
            const online = stringToBoolean(state.online);

            setImmediate(() => {
                this.client.emit(Events.PS2_SERVICE_STATE, id, online);
            });
        }
    }

    /**
     * Factory that wraps events, I don't know what more to say
     *
     * @param {PS2EventData} event
     * @return {PS2Event}
     */
    private wrapEvent(event: PS2EventData): PS2Event {
        switch (event.event_name) {
            case 'AchievementEarned':
                return new AchievementEarned(this.client, event);
            case 'BattleRankUp':
                return new BattleRankUpEvent(this.client, event);
            case 'ContinentLock':
                return new ContinentLock(this.client, event);
            case 'ContinentUnlock':
                return new ContinentUnlock(this.client, event);
            case 'Death':
                return new Death(this.client, event);
            case 'FacilityControl':
                return new FacilityControl(this.client, event);
            case 'GainExperience':
                return new GainExperience(this.client, event);
            case 'ItemAdded':
                return new ItemAdded(this.client, event);
            case 'MetagameEvent':
                return new MetagameEvent(this.client, event);
            case 'PlayerFacilityCapture':
                return new PlayerFacilityCapture(this.client, event);
            case 'PlayerFacilityDefend':
                return new PlayerFacilityDefend(this.client, event);
            case 'PlayerLogin':
                return new PlayerLogin(this.client, event);
            case 'PlayerLogout':
                return new PlayerLogout(this.client, event);
            case 'SkillAdded':
                return new SkillAdded(this.client, event);
            case 'VehicleDestroy':
                return new VehicleDestroy(this.client, event);
        }
    }
}
