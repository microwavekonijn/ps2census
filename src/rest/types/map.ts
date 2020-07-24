export default map;

type map = {
    ZoneId: string,
    Regions: {
        IsList: string,
        Row: {
            RowData: {
                RegionId: string,
                FactionId: string,
            },
        }[],
    },
};
