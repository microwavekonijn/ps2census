import { Events } from '../utils/Constants';
import CharacterEvent from './CharacterEvent';
import { Faction, Loadout, loadoutFactionMap, loadoutTypeMap } from '../utils/PS2Constants';

export enum Kill {
    Normal,
    TeamKill,
    Suicide,
    Undetermined
}

export default class Death extends CharacterEvent {
    /**
     * Can be overwritten if necessary
     */
    public static loadoutFactionMap = loadoutFactionMap;
    public static loadoutTypeMap = loadoutTypeMap;

    public readonly emit = Events.PS2_DEATH;

    protected readonly booleans = ['is_headshot'];

    public readonly attacker_character_id: string;
    public readonly attacker_fire_mode_id: string;
    public readonly attacker_loadout_id: string;
    public readonly attacker_vehicle_id: string;
    public readonly attacker_weapon_id: string;
    public readonly character_loadout_id: string;
    public readonly event_name: 'Death';
    public readonly is_headshot: boolean;
    public readonly zone_id: string;

    /**
     * Checks the cause of death(some real CSI sh*t going on here)
     *
     * @return {Kill}
     */
    public get kill_type(): Kill {
        if (this.attacker_character_id == this.character_id) return Kill.Suicide;

        const attacker = this.attacker_faction;
        const possibleVictim = this.character_faction;

        if (attacker == Faction.NSO || possibleVictim == Faction.NSO)
            return Kill.Undetermined;

        return attacker === possibleVictim
            ? Kill.TeamKill
            : Kill.Normal;
    }

    /**
     * Faction of the attacker
     *
     * @return {Faction}
     */
    public get attacker_faction(): Faction {
        const faction = Death.loadoutFactionMap.get(this.attacker_loadout_id);

        if (!faction) throw new TypeError(`Unknown attacker_loadout_id when determining faction: ${this.attacker_loadout_id}`);

        return faction;
    }

    /**
     * Faction of victim
     *
     * @return {Faction}
     */
    public get character_faction(): Faction {
        const faction = Death.loadoutFactionMap.get(this.character_loadout_id);

        if (!faction) throw new TypeError(`Unknown character_loadout_id when determining faction: ${this.character_loadout_id}`);

        return faction;
    }

    /**
     * Attacker was playing as
     *
     * @return {Loadout}
     */
    public get attacker_loadout(): Loadout {
        const loadout = Death.loadoutTypeMap.get(this.attacker_loadout_id);

        if (!loadout) throw new TypeError(`Unknown attacker_loadout_id when determining loadout: ${this.attacker_loadout_id}`);

        return loadout;
    }

    /**
     * Character was playing as
     *
     * @return {Loadout}
     */
    public get character_loadout(): Loadout {
        const loadout = Death.loadoutTypeMap.get(this.character_loadout_id);

        if (!loadout) throw new TypeError(`Unkown character_loadout_id when determining loadout: ${this.character_loadout_id}`);

        return loadout;
    }

    public toHash(): string {
        return `Death:${this.character_id}:${this.timestamp}`;
    }
}
