export type OutfitRank = {
  collection: 'outfit_rank';
  format: {
    outfit_id: string;
    ordinal: string;
    name: string;
    description: string;
  };
  paths: 'outfit_id' | 'ordinal' | 'name' | 'description';
  partialPaths: 'outfit_id' | 'ordinal' | 'name' | 'description';
  conditions: {
    description?: string;
    name?: string;
    ordinal?: string;
    outfit_id?: string;
  };
};
