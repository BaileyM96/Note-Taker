const express = require('express');
const path = require('path');
const fs = require('fs');


//set up express app to listen for for port 3001
const PORT = 3001;

const app = express();

//Set up express to handle data parsing to convert from one format to another
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

// Set up routes
// GET/notes should return notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
})
//GET* should return index.html

// Set up API Routes
//GET/api/notes should read the db json file and return all notes as JSON
//POST/api/notes should receive a new note and save on the request body

app.listen(PORT, () => {
    console.log((`Example app listening at ${PORT}`))
})