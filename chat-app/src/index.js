const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const Filter = require('bad-words');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

io.on('connection', (socket) => {
    console.log('New WebSocket connection');

    socket.emit('message', "Welcome!");
    socket.broadcast.emit('message', "A new user has joined!");

    socket.on('sendMessage', (message, cb) => {
        const filter = new Filter()

        if (filter.isProfane(message)) {
            return cb('No profanity!')
        }

        io.emit('message', message);
        cb()
    })

    socket.on('sendLocation', (position, cb) => {
        io.emit('message', `https://google.com/maps?q=${position.latitude},${position.longitude}`)
        cb()
    })

    socket.on('disconnect', () => {
        io.emit('message', 'A user has left.');
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})