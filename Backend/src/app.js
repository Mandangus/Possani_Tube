'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DB_URL)
.then(() =>{
    console.log("Conectado com MongoDB")
}).catch((e) => console.log(e))
require('./models/users-model')
require('./models/product-model')


const app = express()
const user = require('./routes/users')
const product = require('./routes/products')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/store', user)
app.use('/product', product)

module.exports = app;

