const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${process.env.MAPBOX_API}&limit=1`

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to mapBox!', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find location. Sorry \'boutcha!', undefined);
        } else {
            const data = body.features[0];
            callback(undefined, {
                latitude: data.center[1],
                longitude: data.center[0],
                location: data.place_name
            });
        }
    });
}

module.exports = geocode;