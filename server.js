const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var jwt    = require('jsonwebtoken');
var config = require('./config');

const api = require('./server/routes/api.routes.js');
const app = express();

mongoose.connect(config.database);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API listening on localhost: ${port}`));
