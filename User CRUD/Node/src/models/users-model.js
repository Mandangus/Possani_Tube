const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    // number: {
    //     type: String,
    //     required: true
    // },
    active: {
        type: Boolean,
        required: true,
        default: true
    }
})

module.exports = mongoose.model('User', schema)