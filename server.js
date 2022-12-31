require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');


const port = process.env.PORT;

// moddlewares
app.use(cors());
app.use(express.json());



// MongoDB connection
const conn = require('./db/connection')

// Using routes
app.use('/',(req, res)=>{
    res.json('Hello')
});
app.use(require('./routes/route'));

conn.then(db=>{
    if(!db) return process.exit(1)

    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port: ${process.env.PORT}`);
    })

    app.on('error', err => console.log(`Failed to connect with HTTP server: ${err}`))

}).catch(error=>{
    console.log(`Connection failed..! ${error}`);
})


