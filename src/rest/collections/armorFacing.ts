import { requestFactory } from '../utils/requestHelpers';

export { armorFacing as armorFacingFormat } from '../formats/armorFacing';

export type armorFacingQuery = Partial<{
    armor_facing_id: string,
    description: string
}>;

export const armorFacing = requestFactory<'armor_facing'>('armor_facing');
