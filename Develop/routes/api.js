//Set up the api routes
//load the path module to work withh files and directory
const path = require('path');
const router = require('express').Router();
const fs = require('fs');


//Route the file path to api/notes
router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db.json'));
});

router.post('/api/notes', (req, res) => {
    let newNote = req.body;
    let noteList = JSON.parse(fs.readFileSync('./db.json', 'utf8'));
    let noteLength = (noteList.length).toString();

    newNote.id = noteLength;
    noteList.push(newNote);

    fs.writeFileSync("./db/db.json", JSON.stringify(noteList));
    res.json(noteList);
});

router.delete('/api/notes/:id', (req, res) => {
    let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    let noteId = (req.params.id).toString();
    noteList = noteList.filter(selected => {
        return selected.id != noteId;
    });

    fs.writeFileSync('./db/db.json', JSON.stringify(noteList));
    res.json(noteList);
});



module.exports = router;