import Vue from 'vue';
import { WEATHER_SERVICE_URL, WEATHER_SERVICE_KEY } from 'app-config';

export default {
    getWeatherData (queryObj) {
        queryObj = {...queryObj, ...{ key: WEATHER_SERVICE_KEY, format: 'json' }}
        let query = '';
        Object.keys(queryObj).map(obj => {
            query += (obj + '=' + queryObj[obj] + '&');
        });
        return Vue.$http.get(WEATHER_SERVICE_URL + '?' + query);
    }
};
