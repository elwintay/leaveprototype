const mongoose = require('mongoose')

const Schema = mongoose.Schema

const leaveSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    leaveType: {
        type: String,
        required: true
    },
    shift: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
}, {timestamps: true})


//mongoose.model(<collection name>, <schema>)
module.exports = mongoose.model('leave', leaveSchema)