export type ImageSet = {
  collection: 'image_set';
  format: {
    image_set_id: string;
    image_id: string;
    description: string;
    type_id: string;
    type_description: string;
    image_path: string;
  };
  paths:
    | 'image_set_id'
    | 'image_id'
    | 'description'
    | 'type_id'
    | 'type_description'
    | 'image_path';
  partialPaths:
    | 'image_set_id'
    | 'image_id'
    | 'description'
    | 'type_id'
    | 'type_description'
    | 'image_path';
  conditions: {
    description?: string;
    image_id?: string;
    image_path?: string;
    image_set_id?: string;
    type_description?: string;
    type_id?: string;
  };
};
