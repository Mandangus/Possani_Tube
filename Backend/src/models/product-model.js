const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    nome: {
        type: String,
        required: true
    },
    preco: {
        type: Double,
        required: true,
    },
    materia: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: false,
    },
    detalhes: {
        type: Boolean,
        required: false
    },
    video: {
        type: String,
        required: true,
    },
    preview:
    {
        type: String,
        required: false,
    },
    vendas:
    {
        type: String,
        required: true,
    },
    thumbnail:
    {
        type: String,
        required: true,
    },

},
{
    collection: "produtos"
}
)

module.exports = mongoose.model('Product', schema)