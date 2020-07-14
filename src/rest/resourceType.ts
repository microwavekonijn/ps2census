import { defineCensusType } from './Base';

export type resourceTypeData = {
    resource_type_id: string,
    description: string,
};

export type resourceTypeQuery = Partial<resourceTypeData>

export default defineCensusType<resourceTypeQuery, resourceTypeData[]>('resource_type');
