const express = require("express");
const app = express();
const parser = require("body-parser");
const port = 3000;
const Episodes = require("./models/Episodes");
const cors = require("cors");


app.use(parser.json());
app.use(cors())

app.get("/episodes", function (req, res) {
  Episodes.find({}).then((episodes) => {
    res.json(episodes);
  });
});

app.get("/", function (req, res) {
    res.send("hello");
  
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
   
  Episodes.findByIdAndUpdate({ _id: req.params.id }, req.body).then(
    (episodes) => {
      res.json(episodes);
    }
  );
});
app.delete("/episodes/:id", function (req, res) {
  Episodes.findByIdAndDelete(req.params.id).then((episodes) => {
    res.json(episodes);
  });
})

  app.set("port", process.env.PORT || 8080);
  app.listen(app.get("port"), () => {  console.log(`✅ PORT: ${app.get("port")} 🌟`);});