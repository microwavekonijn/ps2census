import { PS2Event as PS2EventPayload } from '../stream/types/ps2.events';
import { StreamFilterContract } from './concerns/stream-filter.contract';
import { PS2Event } from './events/ps2.event';
import { CensusClient } from './census.client';
import { StreamClient } from '../stream/stream.client';
import { CensusMessages } from '../stream/types/messages.types';
import { stringToBoolean } from '../utils/formatters';
import ServiceStateChanged = CensusMessages.ServiceStateChanged;

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
import { EventSubscribed } from './types';

export class StreamHandler {
  /**
   * @param {CensusClient} client
   * @param {StreamClient} stream
   * @param {StreamFilterContract} filter
   */
  constructor(
    private readonly client: CensusClient,
    private readonly stream: StreamClient,
    private readonly filter: StreamFilterContract,
  ) {
    this.prepareListeners();
  }

  private prepareListeners(): void {
    this.stream.on('message', message => {
      if (message.service === 'event') {
        switch (message.type) {
          case 'serviceStateChanged':
            this.handleServerStateChanged(message);
            break;
          case 'serviceMessage':
            this.handleEvent(message.payload);
            break;
        }
      } else if (message.subscription) {
        this.handleSubscription(message.subscription);
      }
    });
  }

  /**
   * Handles the event
   *
   * @param {PS2Event} event
   */
  private handleEvent(event: PS2EventPayload): void {
    const wrapped = this.wrapEvent(event);

    if (!this.filter.filter(wrapped)) {
      setImmediate(() => {
        this.client.emit('ps2Event', wrapped);
        this.client.emit(wrapped.emit, wrapped);
      });
    } else {
      setImmediate(() => {
        this.client.emit('duplicate', wrapped);
      });
    }
  }

  /**
   * Handler whenever a subscription notification comes in
   *
   * @param subscription
   */
  private handleSubscription(subscription: EventSubscribed): void {
    setImmediate(() => {
      this.client.emit('subscribed', subscription);
    });
  }

  /**
   * Handler whenever a service state changed notification comes in
   *
   * @param {ServiceStateChanged} state
   */
  private handleServerStateChanged(state: ServiceStateChanged): void {
    const id = state.detail.match(/\d+/)![0];

    if (id) {
      const online = stringToBoolean(state.online);

      setImmediate(() => {
        this.client.emit('serviceState', id, online);
      });
    }
  }

  /**
   * Factory that wraps events, I don't know what more to say
   *
   * @param {PS2Event} event
   * @return {PS2Event}
   */
  private wrapEvent(event: PS2EventPayload): PS2Event {
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
