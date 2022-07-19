'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dontenv = require('dotenv').config()

mongoose.connect(process.env.DB_URL)
.then(() =>{
    console.log("Conectado com MongoDB")
}).catch((e) => console.log(e))

require('./models/users-model')

const app = express()
const product = require('./routes/users')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/store', product)

module.exports = app;

