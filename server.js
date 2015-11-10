require('marko/node-require').install();

require('marko/browser-refresh').enable();

var express = require('express');
var serveStatic = require('serve-static');

var indexTemplate = require('./index.marko');

var app = express();
var port = 8200;

app.use('/static', serveStatic(__dirname + '/static'));

app.get('/', function(req, res) {
    indexTemplate.render({}, res);
});

app.listen(port, function() {
    console.log('Server started! Try it out:\nhttp://localhost:' + port + '/');

    if (process.send) {
        process.send('online');
    }
});
