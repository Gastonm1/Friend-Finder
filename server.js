//-------------------------------------------------------------------------------
// Dependencies
// -------------------------------------------------------------------------------
var express = require("express");

// Sets up the Express App
// -------------------------------------------------------------------------------
var app = express();
var PORT = process.env.PORT || 1021;

// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//-------------------------------------------------------------------------------
// Routing
// -------------------------------------------------------------------------------

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// -------------------------------------------------------------------------------
// LISTENER
// -------------------------------------------------------------------------------

app.listen(PORT, function() {
  console.log("App listening on http://localhost:" + PORT);
});
