const Episode = require("../models/Episodes");
const data = require('../data/southpark.json')
​
Episode.deleteMany({})
    .then(stuff => {
        console.log("Dropped DB")
        Episode.create(data.episodes)
            .then(newRecord => console.log(newRecord))
            .catch(err => console.log(err))
    })
