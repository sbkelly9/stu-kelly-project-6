let mongoose = require("mongoose");
mongoose.Promise = Promise;
let mongoURI = "";
if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/stu-kelly-project-6";
  console.log("Ive connected")
}
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useFindAndModify: false })
  .then(instance =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch(error => console.log("Connection failed!", error));
// now, our mongoose instance has a configured connection to our local db, in addition
// to its model configuration
module.exports = mongoose;