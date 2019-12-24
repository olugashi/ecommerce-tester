var express = require("express");
var app = express();

// Using `public` for static files: http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

app.get("/", function(request, response) {
  response.send("Hello World");
});

// Listen on port 8080
var listener = app.listen(8080, function() {
  console.log("Listening on port " + listener.address().port);
});
