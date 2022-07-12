'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/myapp')
require('./models/users-model')

const app = express()
const product = require('./routes/users')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/store', product)

module.exports = app;
