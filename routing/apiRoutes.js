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
    var userScores = req.body.scores;
    var friendsTotal = [];
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    for (var i = 0; i < friendData.length; i++) {
      var currentFriend = friendData[i];
      currentFriend.scores;
      var total = 0;
      for (var j = 0; j < currentFriend.scores.length; j++) {
        var friendScore = currentFriend.scores[j];
        var userScore = userScores[j];
        total += Math.abs(userScore - friendScore);
      }
      friendsTotal.push(total);
      total = 0;
    }
    var sortedScore = friendsTotal.slice().sort(function(a, b) {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    });

    var lowest = sortedScore[0];
    var indexOfMatch = friendsTotal.indexOf(lowest);
    var name = friendData[indexOfMatch];

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // DISPLAY MATCH
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    var matchFound = {
      name: name.name,
      photo: name.photo
    };
    // res.json(true);
    res.send(matchFound);
  });
};
