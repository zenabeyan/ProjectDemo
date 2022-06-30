const mongoose = require('mongoose')


const connectDB =()=>{
    mongoose
        .connect('mongodb://localhost/Store', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
}
module.exports = connectDB
