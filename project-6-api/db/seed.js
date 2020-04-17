const Episode = require("../models/Episodes");
const data = require('../data/southpark.json')
Episode.remove({}, (stuff)=>console.log(stuff))
Episode.create(data.episodes)
