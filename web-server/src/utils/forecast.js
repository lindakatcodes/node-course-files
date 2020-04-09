const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/${process.env.DARK_SKY_API}/${latitude},${longitude}`; 

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to Dark Sky!', undefined);
        } else if (body.error) {
            callback('Unable to find location. Wah wah.');
        } else {
            const data = body.currently;
            callback(undefined, `The weather outside is currently ${data.summary} and ${data.temperature} degrees F. The humidity is ${data.humidity * 100}%, with ${data.precipProbability * 100}% chance of rain, and winds averaging ${data.windSpeed} miles per hour.`);
        }
    });
}

module.exports = forecast;
