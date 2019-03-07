// // -------------------------------------------------------------------------------
// DEPENDENCIES
// // -------------------------------------------------------------------------------
var path = require("path");

// -------------------------------------------------------------------------------
// ROUTING
// -------------------------------------------------------------------------------
module.exports = function(app){

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "../public.survey.html"));
});

app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/api/friends.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../app/public/home.html"));
  });
};