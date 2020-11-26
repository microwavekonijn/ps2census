import { DefaultCollection } from '../types/collection';
import { outfitRank } from '../formats/outfitRank';

export interface OutfitRank extends DefaultCollection {
    collection: 'outfit_rank';

    format: outfitRank;

    conditions: Partial<{
        description: string,
        name: string,
        ordinal: string,
        outfit_id: string
    }>;
}
