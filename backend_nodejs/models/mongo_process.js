const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    student_id:{
        type: 'string',
        required: true
    },
    sessions:{
        type: 'string',
        required: true
    },
    homework:{
        type: 'string',
        required: true
    },
    name:{
        type: 'string',
        required: true
    }
}, { timestamps:true })



module.exports = mongoose.model('Process', userSchema);