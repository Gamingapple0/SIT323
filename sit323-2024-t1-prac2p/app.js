// Print to the console
console.log("Week-1");

// Import the Express module
var express = require("express");

// Create an Express application
var app = express();

// Define a route that responds with "Hello World" when accessed with a GET request
app.get("/", function (req, res){
    res.send("Hello World");
});

// Start the server on port 3000
app.listen(3000);
