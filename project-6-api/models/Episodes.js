const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

// initialize the schema with a configuration object
const episodeSchema = new Schema({
  // firstName and lastName are our properties
  id: Number,
  url: String,
  name: String,
  season: Number,
  number: Number,
  airdate: Date,
  airtime: String,
  airstamp: Date,
  runtime: Number,
  image: {
      medium: String,
      original: String,    
  },
  summary: String,


});

const Episode = mongoose.model("Episode", episodeSchema);
module.exports = Episode;