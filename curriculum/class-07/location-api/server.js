const express = require('express');
const cors = require('cors');
const superagent = require('superagent');
require('dotenv').config();

const app = express();

app.use(cors());

let latlngs;

const formatLocationResponse = locationItem => {
    const {
        geometry: {
            location: {
                lat,
                lng,
            },
        },
        formatted_address,
    } = locationItem;

    return {
        formatted_query: formatted_address,
        latitude: lat,
        longitude: lng,
    };
};

const getWeatherResponse = async (lat, long) => {

    const weatherData = await superagent.get(`https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${lat},${long}`);

    const actualWeatherData = JSON.parse(weatherData.text);
    const dailyArray = actualWeatherData.daily.data;
    console.log(weatherItem);
    return {
        forecast: weatherItem.summary,
        time: new Date(weatherItem.time * 1000).toDateString(),
    };
});

return mundgedArray;
};

const geoJSON = require('./data/geo.json');

app.get('/location', async (req, res) => {
    const searchQuery = req.query.search;
    console.log('TODO: USING THIS SEARCH WITH API', searchQuery);

    const GEOCODE_API_KEY = process.env.GEOCODE_API_KEY;

    const locationItem = await superagent.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchQuery}&key=${GEOCODE_API_KEY}`);


    const actualItem = JSON.parse(locationItem.text).results[0];
    const response = formatLocationResponse(actualItem);

    latlngs = response;

    res.json(response);
});

app.get('/weather', async (req, res) => {
    // TODO: replace this hard coded data with fetch call to new API
    const weatherObject = await getWeatherResponse(latlngs.latitude, latlngs.longitude);

    console.log('TODO: USING THIS SEARCH WITH API', weatherObject);

    res.json(weatherObject);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('listening on port', port);
});