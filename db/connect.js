const mongoose = require('mongoose')


const connectDB =()=>{
    mongoose
        .connect('mongodb://localhost/Store', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
}
module.exports = connectDB


// const taskSchema = new mongoose.Schema({
//     name: String
// })

// const Task = mongoose.model('Task', taskSchema)
