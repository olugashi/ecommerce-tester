var express = require("express");
var app = express();

// Using `public` for static files: http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

app.get("/", function(request, response) {
  response.send("Hello World");
});

let port = process.env.PORT || 3000;

var listener = app.listen(port, function() {
  console.log("Listening on port " + listener.address().port);
});
