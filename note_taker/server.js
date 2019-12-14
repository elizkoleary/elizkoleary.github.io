var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();
var PORT = process.env.PORT ||
// var PORT = 8080

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up a static folder for client files that ignores the routes
app.use(express.static('public'))

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

//API
app.get("/api/notes", function(req, res) {
  res.json(JSON.parse(fs.readFileSync(path.join(__dirname, "./db/db.json"), 'utf8')));
});

var notes = fs.readFileSync(path.join(__dirname, "./db/db.json"), 'utf8');
notes=JSON.parse(notes);

// Create note 
app.post("/api/notes", function(req, res) {
  var newNote = req.body;
  newNote.id = notes.length;
  notes.push(newNote);
  let stringifiedNotes = JSON.stringify(notes);
  fs.writeFile("./db/db.json", stringifiedNotes, function(err) {
    if(err) {
        return console.log(err);
    }
  });
  res.json(newNote);
});

//delete note
app.delete("/api/notes/:id", function(req, res) {
  const targetNote = parseInt(req.params.id);
  notes.splice(targetNote, 1);
  for(let i = 0; i < notes.length; i++){
    notes[i].id = i;
  }
  let stringifiedNotes = JSON.stringify(notes);
  fs.writeFile("./db/db.json", stringifiedNotes, function(err) {
    if(err) {
        return console.log(err);
    }
  });
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });