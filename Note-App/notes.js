const fs = require('fs');
const chalk = require('chalk');

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNotes = notes.filter(function (note) {
        return note.title === title 
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title,
            body
        })
    
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken'));
    }

}

const removeNote = (title) => {
    const notes = loadNotes();

    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })

    if (notes.length === notesToKeep.length) {
        console.log(chalk.red.inverse('No note found!'));
    } else {
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(notesToKeep);
    }
}

const getAll = () => {
    console.log('Getting all notes');
}

const getNote = (title) => {
    console.log('Reading note: ', title);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}