const express = require('express');
const path = require('path');
const app = express();

const random = () => Math.floor(Math.random() * 100);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/random', (req, res) => {
  console.log('zooo');
  res.json(random());
});

app.listen(3000);
