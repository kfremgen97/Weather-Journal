// Imports
import * as config from '../../config.js';
import * as resourceConstants from './resourceConstants.js';

export const getWeather = function (zip) {
    const url = `${resourceConstants.OPEN_WEATHER_API}?zip=${zip}&units=imperial&appid=${config.OPEN_WEATHER_KEY}`
    return fetch(url)
        .then((response) => {
            // Check if response is ok, if not throw error
            if(!response.ok) throw new Error('Unable to get weather for zip code');
            // If response is okay return the json body
            return response.json()
        })
        .then((data) => {
            console.log(data);
            // Return the data
            return data;
        }).catch((error) => {
            //console.error(error);
            throw error;
        });
};