import { Faction, Loadout } from '../constants/ps2.constants';
import { PS2Events } from '../../stream/types/ps2.events';
import { numberStringToBoolean } from '../../utils/formatters';
import { AttackerEvent } from './base/attacker.event';
import DeathPayload = PS2Events.Death;

export enum Kill {
  Normal,
  TeamKill,
  Suicide,
  RestrictedArea,
}

export class Death extends AttackerEvent<PS2Events.Death> {
  readonly emit = 'death';

  readonly attacker_fire_mode_id: string;
  readonly character_loadout_id: string;
  readonly event_name: 'Death';
  readonly is_headshot: boolean;
  readonly is_critical: boolean;

  /**
   * Cast is_headshot to boolean
   * @param {Death} data
   * @protected
   */
  protected cast(data: DeathPayload) {
    (this as any).is_headshot = numberStringToBoolean(data.is_headshot);
    (this as any).is_critical = numberStringToBoolean(data.is_critical);
  }

  /**
   * Checks the cause of death(some real CSI sh*t going on here)
   *
   * @return {Kill}
   */
  get kill_type(): Kill {
    if (this.attacker_character_id === '0') return Kill.RestrictedArea;
    if (this.attacker_character_id === this.character_id) return Kill.Suicide;

    return this.attacker_team === this.team ? Kill.TeamKill : Kill.Normal;
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
