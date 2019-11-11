/* eslint-disable */
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || "3000";

app.set('views', path.join(__dirname, '../../views'));

app.get('/', (req, res) => {
  const pathToHtml = path.resolve(__dirname, '../../../dist/index.html');
  const constentFromHtml = fs.readFileSync(pathToHtml, 'utf-8');
  res.send(constentFromHtml);
});

app.get('/front-api/db', (req, res) => {
  const pathToHtml = path.resolve(__dirname, '../../../dist/front-api/modal-template.html');
  const constentFromHtml = fs.readFileSync(pathToHtml, 'utf-8');
  res.send(constentFromHtml);
});

app.use('/', express.static(path.resolve(__dirname, '../../../dist/')));

app.listen(port, () => {
  console.log(`Application is running on http://localhost:${port}`);
})