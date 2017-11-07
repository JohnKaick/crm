const express = require('express');
const path = require('path');
const router = express.Router();

module.exports = function (app) {

    /*
    app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, './../../build', 'index.html'));
    });
    */

    app.get('/', function (req, res, next) {
        res.status(200).send({
            title: "API Node",
            version: "1.0.0"
        });
    });

    app.use('/empresa', require('./routes/empresa'))

}