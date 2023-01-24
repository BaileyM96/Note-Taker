//Set up the dependencies
const path = require('path');
const router = require('express').Router();
const fs = require('fs');




//Route the file path to api/notes return all notes as JSON

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
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





module.exports = router;