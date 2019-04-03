const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const locationRequest = process.argv[2];

if (!locationRequest) {
    console.log('Please provide a location you would like weather info on!');
} else {
    geocode(locationRequest, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log(error);
        }
    
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            } 
        
            console.log(location);
            console.log(forecastData);
        })
    })
}


