export type DirectiveTier = {
  collection: 'directive_tier';
  format: {
    directive_tree_id: string;
    directive_tier_id: string;
    directive_points: string;
    completion_count: string;
    name: {
      de: string;
      en: string;
      es: string;
      fr: string;
      it: string;
      tr: string;
    };
    image_set_id: string;
    image_id: string;
    image_path: string;
    reward_set_id: string;
  };
  paths:
    | 'directive_tree_id'
    | 'directive_tier_id'
    | 'directive_points'
    | 'completion_count'
    | 'name.de'
    | 'name.en'
    | 'name.es'
    | 'name.fr'
    | 'name.it'
    | 'name.tr'
    | 'image_set_id'
    | 'image_id'
    | 'image_path'
    | 'reward_set_id';
  partialPaths:
    | 'directive_tree_id'
    | 'directive_tier_id'
    | 'directive_points'
    | 'completion_count'
    | 'name'
    | 'name.de'
    | 'name.en'
    | 'name.es'
    | 'name.fr'
    | 'name.it'
    | 'name.tr'
    | 'image_set_id'
    | 'image_id'
    | 'image_path'
    | 'reward_set_id';
  conditions: {
    completion_count?: string;
    directive_points?: string;
    directive_tier_id?: string;
    directive_tree_id?: string;
    image_id?: string;
    image_path?: string;
    image_set_id?: string;
    name?: string;
    'name.de'?: string;
    'name.en'?: string;
    'name.es'?: string;
    'name.fr'?: string;
    'name.it'?: string;
    'name.tr'?: string;
    reward_set_id?: string;
  };
};
