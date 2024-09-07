const mongoose = require('mongoose')

const Schema = mongoose.Schema

const blockSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    blockType: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    }
}, {timestamps: true})


//mongoose.model(<collection name>, <schema>)
module.exports = mongoose.model('block', blockSchema)