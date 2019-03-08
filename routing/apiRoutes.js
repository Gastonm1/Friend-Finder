// -------------------------------------------------------------------------------
// Load Data
// -------------------------------------------------------------------------------

var friendData = require("../app/data/friends.js");

// -------------------------------------------------------------------------------
// Routing
// -------------------------------------------------------------------------------

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendData);
      });

      app.post("/api/friends", function(req, res) {

        var matchFound = {
          name: "",
          photo: ""
        };
        // must push this to survey userData... BUT HOWWWWWWWW
          res.json(true);
        }
      )};
    