const express = require('express');

const app = express();

const port = process.env.PORT || 4000;

function onListen() {
  console.log(`Listining on :${port}`)
}
app.listen(port, onListen);