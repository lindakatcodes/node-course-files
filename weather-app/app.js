const request = require('request');

const url = 'https://api.darksky.net/forecast/2854e3fa26dc0a694dc165a076c1aefb/37.8267,-122.4233';

request({ url: url, json: true }, (error, res) => {
    if (error) {
        console.log('Unable to connect to weather service!');
    } else if (res.body.error) {
        console.log('Unable to find location. Wah wah.');
    } else {
        const data = res.body.currently;
        console.log(`It is currently ${data.temperature} degrees out. There is a ${(data.precipProbability * 100)}% chance of rain.`);
    }
});

const mapBoxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGluZGFrdDE2IiwiYSI6ImNqaW1sY3Z4bjAxa2EzcHBmaTZ4aTE2dzQifQ.cOXPk5Jme5zrFsUP3KEgLw&limit=1';

request({url: mapBoxUrl, json: true}, (error, res) => {
    if (error) {
        console.log('Unable to connect to mapBox!');
    } else if (res.body.features.length === 0) {
        console.log('Unable to find location. Too bad!');
    } else {
        const data = res.body.features[0];
        console.log(`Longitude is ${data.center[0]}, latitude is ${data.center[1]}`);
    }
});