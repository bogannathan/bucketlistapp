const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router');
const mongoose = requrie('mongoose')

mongoose.connect('mongodb://localhose:bucket/bucket')
app.use(bodyParser.json({ type: '*/*'}));
router(app);

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port);
console.log('Server listening on ' + port);
