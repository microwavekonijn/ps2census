import { CensusCommands, CensusMessages } from '../../stream';
import Subscribe = CensusCommands.Subscribe;
import Subscription = CensusMessages.Subscription;

export type EventSubscription = Omit<Subscribe, 'service' | 'action'>;

export type EventSubscribed = Subscription['subscription'];
