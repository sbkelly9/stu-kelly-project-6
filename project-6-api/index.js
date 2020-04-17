const express = require('express');
const mongoose = require('mongoose');
const app = express();
const parser = require("body-parser");
const port = 3000
const Episodes = require("./models/Episodes");


app.use(parser.json());

app.get("/episodes", function(req, res) {
  Episodes.find({}).then(episodes => {
    res.json(episodes);
  });
});

app.get('/', (req, res) => res.send('music is cool'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

