import { Events } from '../constants/client.constants';
import { CharacterEvent } from './character.event';
import {
  Faction,
  Loadout,
  loadoutFactionMap,
  loadoutTypeMap,
} from '../constants/ps2.constants';
import { DeathData } from '../..';
import { numberStringToBoolean } from '../../utils/formatters';

export enum Kill {
  Normal,
  TeamKill,
  Suicide,
  RestrictedArea,
  Undetermined,
}

export class Death extends CharacterEvent {
  /**
   * Can be overwritten if necessary
   */
  static loadoutFactionMap = loadoutFactionMap;
  static loadoutTypeMap = loadoutTypeMap;

  readonly emit = Events.PS2_DEATH;

  readonly attacker_character_id: string;
  readonly attacker_fire_mode_id: string;
  readonly attacker_loadout_id: string;
  readonly attacker_vehicle_id: string;
  readonly attacker_weapon_id: string;
  readonly character_loadout_id: string;
  readonly event_name: 'Death';
  readonly is_headshot: boolean;
  readonly zone_id: string;

  /**
   * Cast is_headshot to boolean
   * @param {DeathData} data
   * @protected
   */
  protected cast(data: DeathData) {
    (this as any)['is_headshot'] = numberStringToBoolean(data.is_headshot);
  }

  /**
   * Fetch the character data from the attacker
   *
   * @return {Promise<any>}
   */
  attacker(): Promise<any> {
    return this.client.characterManager.fetch(this.attacker_character_id);
  }

  /**
   * Checks the cause of death(some real CSI sh*t going on here)
   *
   * @return {Kill}
   */
  get kill_type(): Kill {
    if (this.attacker_character_id === '0') return Kill.RestrictedArea;
    if (this.attacker_character_id === this.character_id) return Kill.Suicide;

    const attacker = this.attacker_faction;
    const possibleVictim = this.character_faction;

    if (attacker == Faction.NSO || possibleVictim == Faction.NSO)
      return Kill.Undetermined;

    return attacker === possibleVictim ? Kill.TeamKill : Kill.Normal;
  }

  /**
   * Faction of the attacker
   *
   * @return {Faction}
   */
  get attacker_faction(): Faction {
    const faction = Death.loadoutFactionMap.get(this.attacker_loadout_id);

    if (faction === undefined)
      throw new TypeError(
        `Unknown attacker_loadout_id when determining faction: ${this.attacker_loadout_id}`,
      );

    return faction;
  }

  /**
   * Faction of victim
   *
   * @return {Faction}
   */
  get character_faction(): Faction {
    const faction = Death.loadoutFactionMap.get(this.character_loadout_id);

    if (faction === undefined)
      throw new TypeError(
        `Unknown character_loadout_id when determining faction: ${this.character_loadout_id}`,
      );

    return faction;
  }

  /**
   * Attacker was playing as
   *
   * @return {Loadout}
   */
  get attacker_loadout(): Loadout {
    const loadout = Death.loadoutTypeMap.get(this.attacker_loadout_id);

    if (loadout === undefined)
      throw new TypeError(
        `Unknown attacker_loadout_id when determining loadout: ${this.attacker_loadout_id}`,
      );

    return loadout;
  }

  /**
   * Character was playing as
   *
   * @return {Loadout}
   */
  get character_loadout(): Loadout {
    const loadout = Death.loadoutTypeMap.get(this.character_loadout_id);

    if (loadout === undefined)
      throw new TypeError(
        `Unknown character_loadout_id when determining loadout: ${this.character_loadout_id}`,
      );

    return loadout;
  }

  toHash(): string {
    return `Death:${this.character_id}:${this.timestamp}`;
  }
}
