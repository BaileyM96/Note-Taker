//Set up the dependencies
const path = require('path');
const router = require('express').Router();
const fs = require('fs');




//Route the file path to api/notes return all notes as JSON

router.get('/notes', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../db/db.json'));
    } catch (err) {
        console.error(err);
        res.status(500).send('err')
    }
});

router.post('/notes', (req, res) => {
    let dataBase = fs.readFileSync('db/db.json', 'utf8');
    dataBase = JSON.parse(dataBase);
    // res.json(dataBase);

    let userNote = {
        title: req.body.title,
        text: req.body.text,
    }
    dataBase.push(userNote);
    fs.writeFileSync('db/db.json', JSON.stringify(dataBase));
    res.json(dataBase);
});

// router.delete('/api/notes/:id', (req, res) => {
//     let noteList = JSON.parse(fs.readFileSync('../db/db.json', 'utf8'));
//     let noteId = (req.params.id).toString();
//     noteList = noteList.filter(selected => {
//         return selected.id != noteId;
//     });

//     fs.writeFileSync('../db/db.json', JSON.stringify(noteList));
//     res.json(noteList);
// });



module.exports = router;