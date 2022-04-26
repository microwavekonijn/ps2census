export type ResistInfo = {
  collection: 'resist_info';
  format: {
    resist_info_id: string;
    resist_type_id: string;
    resist_percent: string;
    resist_amount: string;
    multiplier_when_headshot: string;
    description: string;
  };
  paths:
    | 'resist_info_id'
    | 'resist_type_id'
    | 'resist_percent'
    | 'resist_amount'
    | 'multiplier_when_headshot'
    | 'description';
  partialPaths:
    | 'resist_info_id'
    | 'resist_type_id'
    | 'resist_percent'
    | 'resist_amount'
    | 'multiplier_when_headshot'
    | 'description';
  conditions: {
    description?: string;
    multiplier_when_headshot?: string;
    resist_amount?: string;
    resist_info_id?: string;
    resist_percent?: string;
    resist_type_id?: string;
  };
};
