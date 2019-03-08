// -------------------------------------------------------------------------------
// Load Data
// -------------------------------------------------------------------------------

var friends = require("../app/public/friends.js");

// -------------------------------------------------------------------------------
// Routing
// -------------------------------------------------------------------------------

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendData);
      });

      app.post("/api/friends", function(req, res) {

        if (tableData.length < 5) {
          friendData.push(req.body);
          res.json(true);
        }
      });
    }