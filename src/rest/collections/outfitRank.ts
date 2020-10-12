import { requestFactory } from '../utils/requestHelpers';
import { outfitRank } from '../types/outfitRank';

export type typeData = outfitRank;

export type query = Partial<{
    description: string,
    name: string,
    ordinal: string,
    outfit_id: string
}>;

export const outfitRank = requestFactory<'outfit_rank'>('outfit_rank');
