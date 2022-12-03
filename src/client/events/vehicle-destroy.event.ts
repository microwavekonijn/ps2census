import { Faction } from '../constants/ps2.constants';
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
        this.attacker_faction !== this.team_id)
    );
  }

  /**
   * Checks the cause of death(some real CSI sh*t going on here)
   *
   * @return {Destroy}
   */
  get kill_type(): Destroy {
    if (this.faction_id === Faction.NONE) return Destroy.Neutral;
    if (this.attacker_character_id === '0') return Destroy.Game;

    if (
      this.attacker_character_id === this.character_id &&
      this.attacker_team_id === this.team_id
    )
      return Destroy.SelfDestruct;

    return this.attacker_team_id === this.team_id
      ? Destroy.Friendly
      : Destroy.Normal;
  }

  toHash(): string {
    return `VehicleDestroy:${this.character_id}:${this.timestamp}:${this.attacker_character_id}`;
  }
}
