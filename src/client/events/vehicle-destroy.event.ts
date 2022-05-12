import { CharacterEvent } from './character.event';
import {
  Faction,
  factionMap,
  Loadout,
  loadoutFactionMap,
  loadoutTypeMap,
} from '../constants/ps2.constants';

export enum Destroy {
  Normal,
  Friendly,
  SelfDestruct,
  Neutral,
  Game,
  Undetermined,
}

export class VehicleDestroy extends CharacterEvent {
  /**
   * Can be overwritten if necessary
   */
  static factionMap = factionMap;
  static loadoutFactionMap = loadoutFactionMap;
  static loadoutTypeMap = loadoutTypeMap;

  readonly emit = 'vehicleDestroy';

  readonly attacker_character_id: string;
  readonly attacker_loadout_id: string;
  readonly attacker_vehicle_id: string;
  readonly attacker_weapon_id: string;
  readonly event_name: 'VehicleDestroy';
  readonly facility_id: string;
  readonly faction_id: string;
  readonly vehicle_id: string;
  readonly zone_id: string;

  /**
   * Fetch the character data from the attacker
   *
   * @return {Promise<any>}
   */
  attacker(): Promise<any> {
    return this.client.characterManager.fetch(this.attacker_character_id);
  }

  /**
   * Vehicle was abandoned(friendly destroys are not counted)
   *
   * @return {boolean}
   */
  unclaimed(): boolean {
    if (this.faction_id === '0') return false;

    return (
      this.attacker_character_id === this.character_id &&
      (this.attacker_character_id === '0' ||
        this.attacker_faction !== this.character_faction)
    );
  }

  /**
   * Checks the cause of death(some real CSI sh*t going on here)
   *
   * @return {Destroy}
   */
  get kill_type(): Destroy {
    if (this.faction_id === '0') return Destroy.Neutral;
    if (this.attacker_character_id === '0') return Destroy.Game;

    const attacker_faction = this.attacker_faction;
    const victim_faction = this.character_faction;

    if (
      this.attacker_character_id === this.character_id &&
      attacker_faction === victim_faction
    )
      return Destroy.SelfDestruct;
    if (attacker_faction === Faction.NSO || victim_faction === Faction.NSO)
      return Destroy.Undetermined;

    return attacker_faction === victim_faction
      ? Destroy.Friendly
      : Destroy.Normal;
  }

  /**
   * Faction of the attacker
   *
   * @return {Faction}
   */
  get attacker_faction(): Faction {
    const faction = VehicleDestroy.loadoutFactionMap.get(
      this.attacker_loadout_id,
    );

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
    const faction = VehicleDestroy.factionMap.get(this.faction_id);

    if (faction === undefined)
      throw new TypeError(
        `Unknown faction_id when determining faction: ${this.faction_id}`,
      );

    return faction;
  }

  /**
   * Attacker was playing as
   *
   * @return {Loadout}
   */
  get attacker_loadout(): Loadout {
    const loadout = VehicleDestroy.loadoutTypeMap.get(this.attacker_loadout_id);

    if (loadout === undefined)
      throw new TypeError(
        `Unknown attacker_loadout_id when determining loadout: ${this.attacker_loadout_id}`,
      );

    return loadout;
  }

  toHash(): string {
    return `VehicleDestroy:${this.character_id}:${this.timestamp}:${this.attacker_character_id}`;
  }
}
