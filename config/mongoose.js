// IMPORTING PACKAGE
const mongoose = require("mongoose");
const DB ="mongodb+srv://vikassinghyadav6:ot9cfaHIUpqEab5U@cluster1.9oquvxy.mongodb.net/Issues_Tracker";

mongoose.connect(DB).then(()=>{
    console.log('Connection successful!');
}).catch((err) => console.log("no connection " + err));

//setting it to db
const db = mongoose.connection;

// CHECKING CONNECTION
//if error occurs
db.on("error", console.error.bind(console, "Error connecting to DB"));
// when db connects successfully
db.once("open", function(){
    console.log("Successfully connected to Vikas DB");
});

module.exports = db;