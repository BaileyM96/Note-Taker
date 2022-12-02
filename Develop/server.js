const express = require('express');
const path = require('path');
const fs = require('fs');
// Came up with routes with tutor to link the page to the main index file
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/api');

// Set up port 3001
const PORT = process.env.PORT || 3001;

const app = express();

//Set up express for data parse
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));
app.use('/', htmlRoutes);
app.use('/', apiRoutes);



app.listen(PORT, () => {
    console.log((`The app is running on port ${PORT}`))
})