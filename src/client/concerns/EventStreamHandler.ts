import { PS2Event } from '../utils/PS2Events';

export default interface EventStreamHandler {
    /**
     * Handle an incoming event
     *
     * @param {PS2Event} event
     */
    handleEvent(event: PS2Event): void;

    /**
     * Handle a subscription notification
     *
     * @param subscription
     */
    handleSubscription(subscription: any): void;
}
