const request = require('request');

const url = 'https://api.darksky.net/forecast/2854e3fa26dc0a694dc165a076c1aefb/37.8267,-122.4233';

request({ url: url, json: true }, (error, res) => {
    const data = res.body.currently;
    console.log(`It is currently ${data.temperature} degrees out. There is a ${(data.precipProbability * 100)}% chance of rain.`);
    console.log(data);
});