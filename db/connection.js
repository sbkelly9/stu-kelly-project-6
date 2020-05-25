let mongoose = require("mongoose");

mongoose.Promise = Promise;

let mongoURI = "";

if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/stu-kelly-project-6";
}

module.exports = mongoose;