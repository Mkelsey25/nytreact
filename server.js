/////////////////////////////////////////////////////////
// handle environment variables
/////////////////////////////////////////////////////////

// use dotenv to read .env vars into Node but silence the Heroku log error for production as no .env will exist
require('dotenv').config( { silent: process.env.NODE_ENV === 'production' } );

// process.env.NODE_ENV is set by heroku with a default value of production
if (process.env.NODE_ENV === 'production') {
    console.log("in PROD");
    // connect to the MongoDB on heroku using MONGODB_URI below
  } else {
    console.log("in DEV");
    // use the connection info from the .env file otherwise
    require('dotenv').load();
  }

//////////////////////////
// dependencies
//////////////////////////
const mongoose = require("mongoose");
const express = require('express');
const session = require('express-session');
const path = require("path");
const bodyParser = require("body-parser");

///////////////////////
// configure Express
///////////////////////
const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

// body parsing middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/////////////////////////
// connect to Mongo DB
/////////////////////////
// If deployed, use the deployed database. Otherwise use the local nytreact database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true)

/////////////////////
// Expess Session
/////////////////////
// console.log("secret: " +  process.env.SECRET_KEY);
app.use(session({
    secret: process.env.SECRET_KEY,     // put this in the heroku environment variables
    saveUninitialized: true,
    resave: true
  }));

//////////////////////
// initial route
//////////////////////
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express, Jenni' });
});

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

////////////////////////////////////////////////////////
// Import routes and give the server access to them.
////////////////////////////////////////////////////////
var routes = require("./controllers/app_controller.js");
app.use(routes);

//////////////////////////////////////////////////////////
//default for when no other route is hit.  Must be last
//////////////////////////////////////////////////////////
app.get('*', (req, res) => {
    res.send({ something: 'Hello Hello' })
})

// listen for request
app.listen(port, () => console.log(`Listening on port ${port}`));