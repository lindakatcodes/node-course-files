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

    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
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

    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length === notesToKeep.length) {
        console.log(chalk.red.inverse('No note found!'));
    } else {
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(notesToKeep);
    }
}

const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.yellow.inverse('Your notes:'));
    notes.forEach((note) => console.log(note.title));
    
}

const readNote = (title) => {
    const notes = loadNotes();

    const foundNote = notes.find((note) => note.title === title);

    if (foundNote) {
        console.log(chalk.cyan.inverse(foundNote.title));
        console.log(foundNote.body);
    } else {
        console.log(chalk.red.inverse('No note with that title'));
    }
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
}