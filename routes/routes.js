const fs = require('fs');
const path = require('path');

module.exports = app => {

    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) throw err;

        var notes = JSON.parse(data);

        // API Routes
        app.get('/api/notes', (req, res) => {
            res.json(notes);
        });

        app.post('/api/notes', (req, res) => {
            let newNote = req.body;
            notes.push(newNote);
            updateDb();
            return console.log('New note added!');
        });

        app.get('/api/notes/:id', (req, res) => {
            res.json(notes[req.params.id]);
        });

        app.delete('/api/notes/:id', (req, res) => {
            notes.splice(req.params.id, 1);
            updateDb();
            return console.log('Note deleted!');
        });

        // HTML Routes
        app.get('/notes', (req, res) => {
            res.sendFile(path.join(__dirname, '../public/notes.html'));
        });

        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../public/index.html'));
        });

        function updateDb() {
            fs.writeFile("db/db.json",JSON.stringify(notes,'\t'),err => {
                if (err) throw err;
            });
        }
    });
}