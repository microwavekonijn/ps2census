export type FacilityLink = {
  collection: 'facility_link';
  format: {
    zone_id: string;
    description: string;
    facility_id_a: string;
    facility_id_b: string;
  };
  paths: 'zone_id' | 'description' | 'facility_id_a' | 'facility_id_b';
  partialPaths: 'zone_id' | 'description' | 'facility_id_a' | 'facility_id_b';
  conditions: {
    description?: string;
    facility_id_a?: string;
    facility_id_b?: string;
    zone_id?: string;
  };
};
