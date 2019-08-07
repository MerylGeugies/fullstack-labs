const express = require('express');
const router = require('./advertisment/router');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;
const jsonParser = bodyParser.json();

app.use(jsonParser);
app.use(router);


function onListen() {
  console.log(`Listening on :${port}`)
}
app.listen(port, onListen);