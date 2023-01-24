const express = require('express');
 const htmlRoutes = require('./routes/htmlRoutes');
 const apiRoutes = require('./routes/api');



// Set up port 3001
const PORT = process.env.PORT || 3001;

const app = express();

//Set up express for data parse
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', apiRoutes); 
app.use('/', htmlRoutes);











app.listen(PORT, () => {
    console.log((`The app is running on port ${PORT}`))
});