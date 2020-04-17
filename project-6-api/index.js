const express = require("express");
const mongoose = require("mongoose");
const app = express();
const parser = require("body-parser");
const port = 3000;
const Episodes = require("./models/Episodes");

app.use(parser.json());

app.get("/episodes", function (req, res) {
  Episodes.find({}).then((episodes) => {
    res.json(episodes);
  });
});

app.get("/episodes/:id", function (req, res) {
  Episodes.findOne({ _id: req.params.id }).then((episodes) => {
    res.json(episodes);
  });
});


app.post("/episodes", function (req, res) {
  Episodes.create(req.body).then((episodes) => {
    res.json(episodes);
  });
});

app.post("/episodes/:id", function (req, res) {
  Episodes.findByIdAndUpdate(
    req.params.id,
    { $push: req.body },
    { new: true }
  ).then((episodes) => {
    res.json(episodes);
  });
});

app.listen(port, () =>
  console.log(`Example app episodesening at http://localhost:${port}`)
);
