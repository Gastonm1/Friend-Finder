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
    console.log(req.body);
    var userScores = req.body.scores;
    var friendsTotal = [];
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    for (var i = 0; i < friendData.length; i++) {
      var currentFriend = friendData[i];
      currentFriend.scores;

      for (var j = 0; j < currentFriend.scores.length; j++) {
        var friendScore = currentFriend.scores[j];
        var userScore = userScores[j];
        console.log(Math.abs(userScore - friendScore)); //<--- Math.abs produces all absolute values
      }
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    var matchFound = {
      name: "",
      photo: ""
    };
    // res.json(true);
    res.send("hello world");
  });
};
