const express = require('express');
const path = require('path');
const json = require('./db.json')
const fs = require('fs')

const app = express();

app.use(express.static(path.join(__dirname, '../../dist')));

app.get('/', (req, res) => {
  const pathToHtml = path.resolve(__dirname, '../../dist/index.html');
  const constentFromHtml = fs.readFileSync(pathToHtml, 'utf-8');
  res.send(constentFromHtml);
});

app.get('/api/db', (req, res) => {
  res.json(json);
});

const port = process.env.PORT || 5050;
app.listen(port);

console.log('App is listening on port ' + port);

