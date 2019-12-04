var express = require("express");
var path = require("path");
var mysql = require("mysql");
var fs = require("fs");

var app = express();
// var PORT = process.env.PORT ||
var PORT = 8080

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up a static folder for client files that ignores the routes
app.use(express.static('public'))

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

//API
app.get("/api/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "./db/db.json"));
});


// Create note - takes in JSON input
app.post("/api/notes", function (req, res) {
  var newNote = req.body;

  // activeNote.routeName = activeNote.name.replace(/\s+/g, "").toLowerCase();
  console.log(newNote);

  newNote.push(activeNote);

  res.json(newNote);
});
