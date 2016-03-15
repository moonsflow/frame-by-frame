var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var forecast = require('./routes/api/forecast');
var giphy = require('./routes/api/giphy');
app.use('/api', forecast);
app.use('/api', giphy);

module.exports = app;