import { PS2EventData } from '../types/ps2.events';

export interface StreamHandlerContract {
  /**
   * Handle an incoming event
   *
   * @param {PS2Event} event
   */
  handleEvent(event: PS2EventData): void;

  /**
   * Handle a subscription notification
   *
   * @param subscription
   */
  handleSubscription(subscription: any): void;

  /**
   * Handle a server state changed notification
   *
   * @param state
   */
  handleServerStateChanged(state: any): void;
}
