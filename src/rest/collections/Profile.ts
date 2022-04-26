export type Profile = {
  collection: 'profile';
  format: {
    profile_id: string;
    profile_type_id: string;
    profile_type_description: string;
    faction_id: string;
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
    movement_speed: string;
    backpedal_speed_modifier: string;
    sprint_speed_modifier: string;
    strafe_speed_modifier: string;
  };
  paths:
    | 'profile_id'
    | 'profile_type_id'
    | 'profile_type_description'
    | 'faction_id'
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
    | 'image_path'
    | 'movement_speed'
    | 'backpedal_speed_modifier'
    | 'sprint_speed_modifier'
    | 'strafe_speed_modifier';
  partialPaths:
    | 'profile_id'
    | 'profile_type_id'
    | 'profile_type_description'
    | 'faction_id'
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
    | 'image_path'
    | 'movement_speed'
    | 'backpedal_speed_modifier'
    | 'sprint_speed_modifier'
    | 'strafe_speed_modifier';
  conditions: {
    backpedal_speed_modifier?: string;
    description?: string;
    'description.de'?: string;
    'description.en'?: string;
    'description.es'?: string;
    'description.fr'?: string;
    'description.it'?: string;
    'description.tr'?: string;
    faction_id?: string;
    image_id?: string;
    image_path?: string;
    image_set_id?: string;
    movement_speed?: string;
    name?: string;
    'name.de'?: string;
    'name.en'?: string;
    'name.es'?: string;
    'name.fr'?: string;
    'name.it'?: string;
    'name.tr'?: string;
    profile_id?: string;
    profile_type_description?: string;
    profile_type_id?: string;
    sprint_speed_modifier?: string;
    strafe_speed_modifier?: string;
  };
};
