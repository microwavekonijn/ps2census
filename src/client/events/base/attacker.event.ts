import { CharacterEvent, CharacterEventPayload } from './character.event';
import {
  Faction,
  Loadout,
  loadoutFactionMap,
  loadoutTypeMap,
} from '../../constants';

export type AttackerEventPayload = Extract<
  CharacterEventPayload,
  {
    attacker_character_id: string;
    attacker_team_id: string;
    attacker_loadout_id: string;
    attacker_vehicle_id: string;
    attacker_weapon_id: string;
    team_id: string;
  }
>;

export abstract class AttackerEvent<
  T extends AttackerEventPayload,
> extends CharacterEvent<T> {
  /**
   * Can be overwritten if necessary
   */
  static loadoutFactionMap = loadoutFactionMap;
  static loadoutTypeMap = loadoutTypeMap;

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
   * Faction of the attacker
   *
   * @return {Faction}
   */
  get attacker_faction(): Faction {
    return (
      AttackerEvent.loadoutFactionMap.get(this.attacker_loadout_id) ??
      Faction.NONE
    );
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
}
