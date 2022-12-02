//This loads the path module that works with files and directory paths
const path = require('path'); 
//This creates a router and uses express
const router = require('express').Router();

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})

module.exports = router;