// setting up express server
const express           = require("express");
const app               = express();


// defining port number
const port              = process.env.port || 8000;


// Acquiring Routes
app.use('/', require('./routes'))

// Listening express server
app.listen ( port , (err) => {
    if(err) {
        console.log('Error in running the server ', err);
    }

    console.log('Server is running on port: ',port);
})