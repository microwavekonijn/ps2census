import { defineCensusType } from './Base';

export type vehicleFactionData = {
    vehicle_id: string,
    faction_id: string,
};

export type vehicleFactionQuery = Partial<vehicleFactionData>

export default defineCensusType<vehicleFactionQuery, vehicleFactionData[]>('vehicle_faction');
