import axios from 'axios';
import CensusRestException from './utils/CensusRestException';
import CensusServerError from './utils/CensusServerError';

export default axios.create({
    baseURL: 'https://census.daybreakgames.com/get/ps2:v2/',
    transformResponse: (data: any, headers?: any): any => {
        if (data.errorMessage || data.errorCode)
            throw new CensusServerError(data);

        if (data.error)
            throw new CensusRestException(data.error);

        return data;
    },
});
