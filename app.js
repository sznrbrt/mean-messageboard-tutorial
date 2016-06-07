'use strict';

const PORT = 3000;

const express = require('express');
const http = require('http');

const app = express();

app.use('/', (req, res) => {
  res.send('Hello from Express!');
});

const server = http.createServer(app);

server.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);
});
