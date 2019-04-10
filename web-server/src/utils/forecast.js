const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/2854e3fa26dc0a694dc165a076c1aefb/${latitude},${longitude}`; 

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to Dark Sky!', undefined);
        } else if (body.error) {
            callback('Unable to find location. Wah wah.');
        } else {
            const data = body.currently;
            callback(undefined, `Today's outlook is ${data.summary}. It is currently ${data.temperature} degrees out with a ${(data.precipProbability * 100)}% chance of rain.`);
        }
    });
}

module.exports = forecast;
