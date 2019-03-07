const fs = require('fs');

const book = {
    user: 'tomorah',
    age: 54
}

fs.writeFileSync('1-json.json', JSON.stringify(book));

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.user = 'griefer';
user.age = 2;

const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJSON)