var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var Items = ["Bouncing balls project", "Fourth of July SASS"];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "list.html"));
});

app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newItem = req.body;
  // var newItem = req;

  console.log(newItem);

  Items.push(newItem.contents);

  res.json(newItem);

  console.log(Items);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});