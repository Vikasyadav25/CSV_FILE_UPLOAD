// importing packages start
const express = require('express');
const port = 8083;
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const csv = require('csv-parser');
const db = require("./config/mongoose");
const bodyParser = require('body-parser');
// importing packages end here 

// setting layouts start
app.use(expressLayouts);
// setting layouts end
// static files middleware start
// middleware for body-parser
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
// middleware for body-parser end

//accesing static files from assets folder
app.use(express.static('./assets'));    
//accesing static files from assets folder end

//setting up view engine
app.set("view engine", "ejs");
app.set("views", "./views");
//setting up view engine end


// require("./routes")(app,db)
// setting up routes
app.use('/', require('./routes'));
// setting up routes end

// directing the app in the given port 
app.listen(port, function(err) {
    if(err) {
        console.log('Error', err);
        return;
    }
    console.log(
      "Server is up and running on port: ",
      `http://localhost:${port}`
    );

});