import { requestFactory } from '../utils/requestHelpers';

export { outfitRank as outfitRankFormat } from '../formats/outfitRank';

export type outfitRankQuery = Partial<{
    description: string,
    name: string,
    ordinal: string,
    outfit_id: string
}>;

export const outfitRank = requestFactory('outfit_rank');
