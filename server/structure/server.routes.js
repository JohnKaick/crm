const express = require('express');
const path = require('path');


module.exports = function (app) {

    app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, './../../build', 'index.html'));
    });

    //Rotas exemplo
    /*
    const index = require('./routes/index')
    const personRoute = require('./routes/personRoute')

    app.use('/', index)
    app.use('/persons', personRoute)
    */

}