import { PS2Event as PS2EventPayload } from '../stream/types/ps2.events';
import { StreamFilterContract } from './concerns/stream-filter.contract';
import { PS2Event } from './events/base/ps2.event';
import { CensusClient } from './census.client';
import { StreamClient } from '../stream/stream.client';
import { CensusMessages } from '../stream/types/messages.types';
import { stringToBoolean } from '../utils/formatters';

import { AchievementEarned } from './events/achievement-earned.event';
import { BattleRankUp } from './events/battle-rank-up.event';
import { ContinentLock } from './events/continent-lock.event';
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
import { EventSubscribed } from './types/event-subscription.types';

import nextTick from '../utils/next-tick';
import ServiceStateChanged = CensusMessages.ServiceStateChanged;

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
    this.stream.on('message', msg => {
      if ('service' in msg && msg.service === 'event') {
        switch (msg.type) {
          case 'serviceStateChanged':
            this.handleServerStateChanged(msg);
            break;
          case 'serviceMessage':
            if ('event_name' in msg.payload) this.handleEvent(msg.payload);
            break;
        }
      } else if ('subscription' in msg) {
        this.handleSubscription(msg.subscription);
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

    if (!wrapped) return;

    if (!this.filter.filter(wrapped)) {
      nextTick(() => {
        this.client.emit('ps2Event', wrapped);
        this.client.emit(wrapped.emit, wrapped);
      });
    } else {
      nextTick(() => {
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
    nextTick(() => {
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

      nextTick(() => {
        this.client.emit('serviceState', id, online, state.detail);
      });
    }
  }

  /**
   * Factory that wraps events, I don't know what more to say
   *
   * @param {PS2Event} event
   * @return {PS2Event}
   */
  private wrapEvent(event: PS2EventPayload): PS2Event<any> | undefined {
    switch (event.event_name) {
      case 'AchievementEarned':
        return new AchievementEarned(this.client, event);
      case 'BattleRankUp':
        return new BattleRankUp(this.client, event);
      case 'ContinentLock':
        return new ContinentLock(this.client, event);
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
