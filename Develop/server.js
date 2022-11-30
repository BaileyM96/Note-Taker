const express = require('express');
const path = require('path');
const fs = require('fs');
const htmlRoutes = require('./routes/htmlRoutes');

// Set up port 3001
const PORT = 3001;

const app = express();

//Set up express for data parse
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(express.static("public"));
app.use('/', htmlRoutes)
// Set up routes

//GET* should return index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})
// Set up API Routes
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/db/db.json'));
});

//Use newNote, noteList and noteLength


app.listen(PORT, () => {
    console.log((`The app is running on port ${PORT}`))
})