import { lang } from '../utils/responseTypes';

export default empireScore;

type empireScore = {
    tracker_name: string,
    tracker_description: string,
    start_date: string,
    start_time: string,
    end_date: string,
    end_time: string,
    name: lang,
    [prop: string]: any,
};
