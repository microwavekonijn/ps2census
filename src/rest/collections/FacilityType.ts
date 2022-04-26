export type FacilityType = {
  collection: 'facility_type';
  format: { facility_type_id: string; description: string };
  paths: 'facility_type_id' | 'description';
  partialPaths: 'facility_type_id' | 'description';
  conditions: { description?: string; facility_type_id?: string };
};
