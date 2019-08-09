const users = [];

// Check user data and if valid, add user to room
const addUser = ({ id, username, room }) => {
    // clean the data from client
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // validate data, make sure both exist
    if (!username || !room) {
        return {
            error: 'Username and room are required'
        }
    }

    // check if username already exists in room
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // if so, return error
    if (existingUser) {
        return {
            error: 'Username already in use!'
        }
    }

    // all validations cleared - return user
    const user = { id, username, room }
    users.push(user)
    return { user }
}

// When user leaves room, remove from list
const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

// find user by id
const getUser = (id) => {
    return users.find((user) => user.id === id)
}

// get list of all users currently in room
const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase();
    return users.filter(user => user.room === room);
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}