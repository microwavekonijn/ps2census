import { CensusMessages } from '../../stream/types/messages.types';
import { CensusCommands } from '../../stream/types/command.types';
import Subscribe = CensusCommands.Subscribe;
import Subscription = CensusMessages.Subscription;

export type EventSubscription = Omit<Subscribe, 'service' | 'action'>;

export type EventSubscribed = Subscription['subscription'];
