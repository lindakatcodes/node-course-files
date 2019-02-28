// var obj = {
//     name: 'Linda'
// };

// var stringObj = JSON.stringify(obj);
// console.log(stringObj);

// var personString = '{"name": "Linda", "age": 36}';
// var personObj = JSON.parse(personString);
// console.log(typeof personObj, personObj);

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note, note.title);