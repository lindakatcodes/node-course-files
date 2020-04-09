# node-course-files
Mini projects created following Udemy's [Complete Node.js Developer Course](https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/content)

Each folder contains the files used for each app. A simple breakdown can be found below, as I progress through the course.

## Note App
Introduction to some main fundamentals of working in Node, creating a note-taking app. Focused on learning the basics of Node modules, getting input from the command line, & interpreting error messages.

## Weather App
Started using asynchronous functions, web servers with Express, as well as some basic web deployment. Uses darksky.net and mapbox.com to get weather forecasts for the provided location. This project is hosted here: [My weather app](https://katt-weather-app.herokuapp.com/)

To use this code and run your own weather app, you will need to get an API key from Mapbox and DarkSky. Then, you'll create a .env file in the web-server folder, and set Node to use those variables in the API calls. (In this course, we used a npm package named env-cmd.) 

## Task App
Created a task / to-do API from scratch. Worked with all the things: MongoDB, Mongoose, Express, Postman, Robo 3T. Covered creating routes for different end points; basic user authentication; promises; hashing passwords; running middleware functions in Express; linking different models together in Mongoose. This project is hosted here: [Task API endpoint](https://katt-to-do-api.herokuapp.com/)

This project also uses a few API keys - setup will be similar to the weather app, except it's in the task-app folder (we made a folder called config to store variables for dev and for test environments). There will be keys for MongoDB & Send Grid, and a secret (created yourself) for JWT.

## Chat App
Created a little chatroom app using Socket.io. Very fun project! A lot of work with web sockets and interpreting the real time data, separating it to different chat rooms, and providing messages to all users or a single user. Also reinforced previous concepts of user account setup and security, web servers, and deployment. This project is hosted here: [Chat app](https://katt-chat-app.herokuapp.com/)
