import { CharacterEvent } from './character.event';
import {
  Faction,
  Loadout,
  loadoutFactionMap,
  loadoutTypeMap,
} from '../../constants';

export abstract class AttackerEvent extends CharacterEvent {
  /**
   * Can be overwritten if necessary
   */
  static loadoutFactionMap = loadoutFactionMap;
  static loadoutTypeMap = loadoutTypeMap;

  readonly attacker_character_id: string;
  readonly attacker_loadout_id: string;
  readonly attacker_vehicle_id: string;
  readonly attacker_weapon_id: string;

  /**
   * Fetch the character data from the attacker
   *
   * @return {Promise<any>}
   */
  attacker(): Promise<any> {
    return this.client.characterManager.fetch(this.attacker_character_id);
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
}
