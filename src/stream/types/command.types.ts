import { PS2EventNames } from './ps2.events';

export namespace CensusCommands {
  /** Commands */

  export type Echo = {
    service: 'event';
    action: 'echo';
    payload: unknown;
  };

  export type Subscribe = {
    service: 'event';
    action: 'subscribe';
    characters?: string[];
    eventNames?: (
      | 'all'
      | PS2EventNames
      | `GainExperience_experience_id_${number}`
    )[];
    worlds?: string[];
    logicalAndCharactersWithWorlds?: boolean;
  };

  export type ClearSubscribe =
    | {
        service: 'event';
        action: 'clearSubscribe';
        all: 'true' | 'false';
      }
    | {
        service: 'event';
        action: 'clearSubscribe';
        characters?: string[];
        eventNames?: (
          | 'all'
          | PS2EventNames
          | `GainExperience_experience_id_${number}`
        )[];
        worlds?: string[];
        logicalAndCharactersWithWorlds?: boolean;
      };

  export type RecentCharacters = {
    service: 'event';
    action: 'recentCharacterIds';
  };

  export type RecentCharactersCount = {
    service: 'event';
    action: 'recentCharacterIdsCount';
  };
}

export type CensusCommand =
  | CensusCommands.Echo
  | CensusCommands.Subscribe
  | CensusCommands.ClearSubscribe
  | CensusCommands.RecentCharacters
  | CensusCommands.RecentCharactersCount;
