const mongoose = require('mongoose');

const uri = 'mongodb://localhost/crm';

mongoose.connect(uri);

const db = mongoose.connection;

db.on('connected', function () {
    console.log('Mongoose default connection open to ' + uri);
});

db.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

require('../models/index');

module.exports = db