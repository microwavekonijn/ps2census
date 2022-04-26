export type DirectiveTree = {
  collection: 'directive_tree';
  format: {
    directive_tree_id: string;
    directive_tree_category_id: string;
    name: {
      de: string;
      en: string;
      es: string;
      fr: string;
      it: string;
      tr: string;
    };
    description: {
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
  };
  paths:
    | 'directive_tree_id'
    | 'directive_tree_category_id'
    | 'name.de'
    | 'name.en'
    | 'name.es'
    | 'name.fr'
    | 'name.it'
    | 'name.tr'
    | 'description.de'
    | 'description.en'
    | 'description.es'
    | 'description.fr'
    | 'description.it'
    | 'description.tr'
    | 'image_set_id'
    | 'image_id'
    | 'image_path';
  partialPaths:
    | 'directive_tree_id'
    | 'directive_tree_category_id'
    | 'name'
    | 'name.de'
    | 'name.en'
    | 'name.es'
    | 'name.fr'
    | 'name.it'
    | 'name.tr'
    | 'description'
    | 'description.de'
    | 'description.en'
    | 'description.es'
    | 'description.fr'
    | 'description.it'
    | 'description.tr'
    | 'image_set_id'
    | 'image_id'
    | 'image_path';
  conditions: {
    description?: string;
    'description.de'?: string;
    'description.en'?: string;
    'description.es'?: string;
    'description.fr'?: string;
    'description.it'?: string;
    'description.tr'?: string;
    directive_tree_category_id?: string;
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
  };
};
