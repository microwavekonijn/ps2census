import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import outfitRank from '../types/outfitRank';

export type typeData = outfitRank;

export type query = {
    description: string,
    name: string,
    ordinal: string,
    outfit_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('outfit_rank');
