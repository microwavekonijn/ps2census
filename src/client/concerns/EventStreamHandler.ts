import { PS2EventType } from '../utils/PS2Events';

export default interface EventStreamHandler {
    /**
     * Handle an incoming event
     *
     * @param {PS2EventType} event
     */
    handleEvent(event: PS2EventType): void;

    /**
     * Handle a subscription notification
     *
     * @param subscription
     */
    handleSubscription(subscription: any): void;
}
