const express = require('express');
const app = express ();
const port = 8080;

app.get('/', (req,res) => {
  res.send('landing page');
});

app.listen(port);

