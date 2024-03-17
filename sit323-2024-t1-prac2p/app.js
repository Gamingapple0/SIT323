// Print to the console
console.log("Week-1");

// Import the Express module
var express = require("express");
var path = require("path");

// Create an Express application
var app = express();

// Serving the index.html file
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Start the server on port 3000
app.listen(3000, function () {
    console.log('Server is running on http://localhost:3000');
});
