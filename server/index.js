const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

require('./database')
const uri = process.env.MONGO_URI || 'mongodb://localhost/crm'
mongoose.Promise = global.Promise
mongoose.connect(uri)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, './../build')))

require('./structure/server.routes')(app)

module.exports = app