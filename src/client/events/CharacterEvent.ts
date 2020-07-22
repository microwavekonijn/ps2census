import PS2Event from './PS2Event';

export default abstract class CharacterEvent extends PS2Event {
    public readonly character_id: string;
}
