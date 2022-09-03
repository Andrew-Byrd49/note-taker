const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid');

function createNew (body, noteArr) {
    const newNote = body;

    newNote.id = uniqid()
    noteArr.push(newNote);

    fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify(noteArr, null, 2));

    return newNote;
}

module.exports = {createNew}