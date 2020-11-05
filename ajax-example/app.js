const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');

const jsonData = (id) => {
  return JSON.parse(fs.readFileSync(`data${id}.json`));
};
//console.log(jsonData);
//app.use('/', () => console.log('server has running in port 3000'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/get-data/:id', (req, res) => {
  const id = req.params.id;
  res.sendFile(path.join(__dirname, `data${id}.html`));
});
app.get('/get-data-with-ajax/:id', (req, res) => {
  const id = req.params.id;
  res.json(jsonData(id));
});

app.listen(8000, () => console.log('server running on port 8000'));
