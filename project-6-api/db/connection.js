const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/episodes", { useNewUrlParser: true });

module.exports = mongoose;
let mongoURI = "";
if (process.env.NODE_ENV === "production") {   mongoURI = process.env.DB_URL; } else {   mongoURI = "mongodb://localhost/stu-kelly-project-6-api"; }