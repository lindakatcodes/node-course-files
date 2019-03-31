const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibGluZGFrdDE2IiwiYSI6ImNqaW1sY3Z4bjAxa2EzcHBmaTZ4aTE2dzQifQ.cOXPk5Jme5zrFsUP3KEgLw&limit=1`

    request({url, json: true}, (error, res) => {
        if (error) {
            callback('Unable to connect to mapBox!', undefined);
        } else if (res.body.features.length === 0) {
            callback('Unable to find location. Sorry \'boutcha!', undefined);
        } else {
            const data = res.body.features[0];
            callback(undefined, {
                latitude: data.center[1],
                longitude: data.center[0],
                location: data.place_name
            });
        }
    });
}

module.exports = geocode;