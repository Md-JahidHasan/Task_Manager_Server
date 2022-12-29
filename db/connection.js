const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

// 
const conn = mongoose.connect(`mongodb+srv://taskManagementDB:LTvqpFmTBJpD8TrB@cluster0.ptptzcl.mongodb.net/taskManagerDB?retryWrites=true&w=majority`)
.then(db=>{
    console.log("Database Connected");
    return db;
}).catch(err=>{
    console.log('Connection Error');
})

module.exports = conn;