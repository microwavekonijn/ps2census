import { defineCensusType } from './Base';

export type outfitRankData = {
    outfit_id: string,
    ordinal: string,
    name: string,
    description: string,
};

export type outfitRankQuery = Partial<outfitRankData>

export default defineCensusType<outfitRankQuery, outfitRankData[]>('outfit_rank');
