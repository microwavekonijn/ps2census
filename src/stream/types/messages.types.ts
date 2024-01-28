import { PS2Event, PS2EventNames } from './ps2.events';

export namespace CensusMessages {
  export type ConnectionStateChanged = {
    service: 'push';
    type: 'connectionStateChanged';
    connected: 'true' | 'false';
  };

  export type ServiceStateChanged = {
    service: 'event';
    type: 'serviceStateChanged';
    detail: string;
    online: 'true' | 'false';
  };

  export type Heartbeat = {
    service: 'event';
    type: 'heartbeat';
    timestamp: string;
    online: { [K: string]: 'true' | 'false' };
  };

  export type ServiceMessage = {
    service: 'event';
    type: 'serviceMessage';
    payload:
      | PS2Event
      | {
          recent_character_id_count: number;
          recent_character_id_list?: string[];
        };
  };

  export type Subscription = {
    subscription:
      | {
          characters: ['all'] | string[];
          eventNames: (
            | 'all'
            | PS2EventNames
            | `GainExperience_experience_id_${number}`
          )[];
          worlds: string[];
          logicalAndCharactersWithWorlds: boolean;
        }
      | {
          characterCount: number;
          eventNames: (
            | 'all'
            | PS2EventNames
            | `GainExperience_experience_id_${number}`
          )[];
          worlds: string[];
          logicalAndCharactersWithWorlds: boolean;
        };
  };

  export type Help = {
    'send this for help': {
      service: 'event';
      action: 'help';
    };
  };

  export type Echo = unknown;
}

export type CensusMessageWithoutEcho =
  | CensusMessages.ConnectionStateChanged
  | CensusMessages.ServiceStateChanged
  | CensusMessages.Heartbeat
  | CensusMessages.ServiceMessage
  | CensusMessages.Subscription
  | CensusMessages.Help;

export type CensusMessage = CensusMessageWithoutEcho | CensusMessages.Echo;
