import { Events } from '../utils/Constants';
import { CharacterEvent } from './CharacterEvent';
import { characterFormat } from '../../rest/collections/character';
import { Faction, factionMap, Loadout, loadoutFactionMap, loadoutTypeMap } from '../utils/PS2Constants';

export enum Destroy {
    Normal,
    Friendly,
    SelfDestruct,
    Neutral,
    Game,
    Undetermined
}

export class VehicleDestroy extends CharacterEvent {
    /**
     * Can be overwritten if necessary
     */
    public static factionMap = factionMap;
    public static loadoutFactionMap = loadoutFactionMap;
    public static loadoutTypeMap = loadoutTypeMap;

    public readonly emit = Events.PS2_VEHICLE_DESTROYED;

    public readonly attacker_character_id: string;
    public readonly attacker_loadout_id: string;
    public readonly attacker_vehicle_id: string;
    public readonly attacker_weapon_id: string;
    public readonly event_name: 'VehicleDestroy';
    public readonly facility_id: string;
    public readonly faction_id: string;
    public readonly vehicle_id: string;
    public readonly zone_id: string;

    /**
     * Fetch the character data from the attacker
     *
     * @return {Promise<characterFormat>}
     */
    public attacker(): Promise<characterFormat> {
        return this.client.characterManager.fetch(this.attacker_character_id);
    }

    /**
     * Vehicle was abandoned(friendly destroys are not counted)
     *
     * @return {boolean}
     */
    public unclaimed(): boolean {
        if (this.faction_id === '0') return false;

        return this.attacker_character_id === this.character_id && (
            this.attacker_character_id === '0'
            || this.attacker_faction !== this.character_faction
        );
    }

    /**
     * Checks the cause of death(some real CSI sh*t going on here)
     *
     * @return {Destroy}
     */
    public get kill_type(): Destroy {
        if (this.faction_id === '0') return Destroy.Neutral;
        if (this.attacker_character_id === '0') return Destroy.Game;

        const attacker = this.attacker_faction;
        const victim = this.character_faction;

        if (this.attacker_character_id === this.character_id && attacker !== victim) return Destroy.SelfDestruct;

        if (attacker === Faction.NSO) return Destroy.Undetermined;

        return attacker === victim
            ? Destroy.Friendly
            : Destroy.Normal;
    }

    /**
     * Faction of the attacker
     *
     * @return {Faction}
     */
    public get attacker_faction(): Faction {
        const faction = VehicleDestroy.loadoutFactionMap.get(this.attacker_loadout_id);

        if (faction === undefined) throw new TypeError(`Unknown attacker_loadout_id when determining faction: ${this.attacker_loadout_id}`);

        return faction;
    }

    /**
     * Faction of victim
     *
     * @return {Faction}
     */
    public get character_faction(): Faction {
        const faction = VehicleDestroy.factionMap.get(this.faction_id);

        if (faction === undefined) throw new TypeError(`Unknown faction_id when determining faction: ${this.faction_id}`);

        return faction;
    }

    /**
     * Attacker was playing as
     *
     * @return {Loadout}
     */
    public get attacker_loadout(): Loadout {
        const loadout = VehicleDestroy.loadoutTypeMap.get(this.attacker_loadout_id);

        if (loadout === undefined) throw new TypeError(`Unknown attacker_loadout_id when determining loadout: ${this.attacker_loadout_id}`);

        return loadout;
    }

    public toHash(): string {
        return `VehicleDestroy:${this.character_id}:${this.timestamp}:${this.attacker_character_id}`;
    }
}
