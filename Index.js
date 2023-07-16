// setting up express server
const express           = require("express");
const app               = express();


// defining port number
const port              = process.env.port || 8000;


// Route
app.get('/', (req, res) => {
    return res.send('<h1>Hello From Express</h1>')
})

app.listen ( port , (err) => {
    if(err) {
        console.log('Error in running the server ', err);
    }

    console.log('Server is running on port: ',port);
})