import { Events } from '../utils/Constants';
import CharacterEvent from './CharacterEvent';
import { typeData as character } from '../../rest/collections/character';
import { Faction, factionMap, Loadout, loadoutFactionMap, loadoutTypeMap } from '../utils/PS2Constants';

export enum Destroy {
    Normal,
    Friendly,
    SelfDestruct,
    Undetermined
}

export default class VehicleDestroy extends CharacterEvent {
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
     * @return {Promise<typeData>}
     */
    public attacker(): Promise<character> {
        return this.client.characterManager.fetch(this.attacker_character_id);
    }

    /**
     * Checks the cause of death(some real CSI sh*t going on here)
     *
     * @return {Destroy}
     */
    public get kill_type(): Destroy {
        if (this.attacker_character_id == this.character_id) return Destroy.SelfDestruct;
        if (this.faction_id === '0') return Destroy.Undetermined;

        const attacker = this.attacker_faction;
        const possibleVictim = this.character_faction;

        if (attacker == Faction.NSO || possibleVictim == Faction.NSO)
            return Destroy.Undetermined;

        return attacker === possibleVictim
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
