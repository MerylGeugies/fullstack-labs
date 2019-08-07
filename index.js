const express = require('express');
const router = require('./advertisment/router');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const middelware = cors();
const port = process.env.PORT || 4000;
const jsonParser = bodyParser.json();

app.use(middelware);
app.use(jsonParser);
app.use(router);

function onListen() {
  console.log(`Listening on :${port}`)
}
app.listen(port, onListen);