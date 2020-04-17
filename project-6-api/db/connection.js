const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/episodes", { useNewUrlParser: true });

module.exports = mongoose;
