const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./structure/server.routes')(app);

module.exports = app