import { Faction, factionMap } from '../constants/ps2.constants';
import { AttackerEvent } from './base/attacker.event';
import { PS2Events } from '../../stream';

export enum Destroy {
  Normal,
  Friendly,
  SelfDestruct,
  Neutral,
  Game,
}

export class VehicleDestroy extends AttackerEvent<PS2Events.VehicleDestroy> {
  /**
   * Can be overwritten if necessary
   */
  static factionMap = factionMap;

  readonly emit = 'vehicleDestroy';

  readonly event_name: 'VehicleDestroy';
  readonly facility_id: string;
  readonly faction_id: Faction;
  readonly vehicle_id: string;

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

    const attacker_faction = this.attacker_team_id;
    const victim_faction = this.team_id;

    if (
      this.attacker_character_id === this.character_id &&
      attacker_faction === victim_faction
    )
      return Destroy.SelfDestruct;

    return attacker_faction === victim_faction
      ? Destroy.Friendly
      : Destroy.Normal;
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

  toHash(): string {
    return `VehicleDestroy:${this.character_id}:${this.timestamp}:${this.attacker_character_id}`;
  }
}
