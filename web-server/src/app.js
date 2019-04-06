const path = require('path');
const express = require('express');

// express is actually a function in itself, so to set it onto an app we can run, we just call express
const app = express();
//__dirname will give us the path to our current directory; join then lets us write a string to go up a level and add our public folder
const publicDirPath = path.join(__dirname, '../public');

// using .set lets us set a var in express
app.set('view engine', 'hbs');

// customize server - in this instance, set a static path to our html files
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    // use render to show a view - first arg is name of template file, second is object with vars to use
    res.render('index', {
        title: 'Super Cool Weather App'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About the Author',
        name: 'Kat'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        message: 'Need some help? Let us know!'
    })
})

// app.get is how you create routes - first arg is the name of the route, second is the action to take when someone reaches that route
app.get('/weather', (req, res) => {
    // we use .send when we want to send something to the browser
    res.send({
        forecast: 'cloudy',
        location: 'Idaho'
    });
})

// to start the server, we listen on whatever port we set
app.listen(3000, () => {
    console.log('Server is up on port 3000');
})