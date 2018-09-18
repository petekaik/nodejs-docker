// Simple Hello World Node.js test with express
'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1>Wake up!!</h1><br><p>' + new Date() + '<br>This is a test</p>');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
