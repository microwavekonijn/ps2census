export interface map {
    ZoneId: string;
    Regions: {
        IsList: string;
        Row: {
            RowData: {
                RegionId: string;
                FactionId: string;
            };
        }[];
    };
}
