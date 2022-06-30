const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type:String,
        required:'true',
        maxlength:20
    },
    completed:{type:Boolean, default:'true'}
})


module.exports = mongoose.model('Task',TaskSchema)