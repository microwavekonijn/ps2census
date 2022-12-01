import { CharacterEvent } from './character.event';
import {
  Faction,
  factionMap,
  Loadout,
  loadoutFactionMap,
  loadoutTypeMap,
} from '../../constants';
import { PS2Event as PS2EventPayload } from '../../../stream';

export abstract class AttackerEvent<
  T extends PS2EventPayload,
> extends CharacterEvent<T> {
  /**
   * Can be overwritten if necessary
   */
  static loadoutFactionMap = loadoutFactionMap;
  static loadoutTypeMap = loadoutTypeMap;
  static factionMap = factionMap;

  readonly attacker_character_id: string;
  readonly attacker_team_id: Faction;
  readonly attacker_loadout_id: string;
  readonly attacker_vehicle_id: string;
  readonly attacker_weapon_id: string;
  readonly team_id: Faction;

  /**
   * Fetch the character data from the attacker
   *
   * @return {Promise<any>}
   */
  attacker<T = any>(): Promise<T | undefined> {
    if (this.attacker_character_id == '0') return Promise.resolve(undefined);

    return this.client.characterManager.fetch(this.attacker_character_id);
  }

  /**
   * Team the attacker belongs to
   *
   * @return {Faction}
   */
  get attacker_team(): Faction {
    const team = AttackerEvent.factionMap.get(this.attacker_team_id);

    if (team === undefined)
      throw new TypeError(
        `Unknown attacker_team_id when determining team: ${this.attacker_team_id}`,
      );

    return team;
  }

  /**
   * Faction of the attacker
   *
   * @return {Faction}
   */
  get attacker_faction(): Faction {
    const faction = AttackerEvent.loadoutFactionMap.get(
      this.attacker_loadout_id,
    );

    if (faction === undefined)
      throw new TypeError(
        `Unknown attacker_loadout_id when determining faction: ${this.attacker_loadout_id}`,
      );

    return faction;
  }

  /**
   * Attacker was playing as
   *
   * @return {Loadout}
   */
  get attacker_loadout(): Loadout {
    const loadout = AttackerEvent.loadoutTypeMap.get(this.attacker_loadout_id);

    if (loadout === undefined)
      throw new TypeError(
        `Unknown attacker_loadout_id when determining loadout: ${this.attacker_loadout_id}`,
      );

    return loadout;
  }

  /**
   * Team the victim belongs to
   *
   * @return {Faction}
   */
  get team(): Faction {
    const team = AttackerEvent.factionMap.get(this.team_id);

    if (team === undefined)
      throw new TypeError(
        `Unknown team_id when determining team: ${this.team_id}`,
      );

    return team;
  }
}
