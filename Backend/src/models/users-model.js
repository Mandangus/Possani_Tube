const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    isAdm: {
        type: Boolean,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    compras:
    {
        type: Array,
        required: true,
        default: []
    },

},
{
    collection: "usuarios"
}
)

module.exports = mongoose.model('User', schema)