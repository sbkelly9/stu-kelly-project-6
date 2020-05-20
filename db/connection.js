let mongoose = require("mongoose");
let mongoURI = "";
​
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
} else {
    mongoURI = "mongodb://localhost/stu-kelly-project-6-api";
}
​
mongoose.connect(mongoURI, { useNewUrlParser: true });
​
module.exports = mongoose; 

"mongodb+srv://sbkelly9:Jamkid7!@cluster0-rafzc.mongodb.net/test?retryWrites=true&w=majority"