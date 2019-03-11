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
        console.log(req.body)
        var userScores = req.body.scores;
        
        var matchFound = {
          name: "",
          photo: ""
        };
          // res.json(true);
          res.send("hello world")
        }
      )};
    