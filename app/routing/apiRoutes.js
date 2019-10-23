// Load Data
//===========================================
var friends = require("../data/friends.js");



//============================================
// Routing
//=============================================

module.exports = function(app){
    
    // List of ALL friend entries
    app.get("api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var friend = req.body;
        var match;
        var lowestDiff = 100;
        for (var i = 0; i < friends.length; i++) {
            var diff = 0;
            for (var j; j < friends.score[j]; j++) {
                diff += Math.abs(friend.score[j] - friends[i].score[j]);
            }
            if (diff < lowestDiff) {
                lowestDiff = diff;
                match = friends[i];
            }

        }
        friends.push(friend);
        res.json(match);
    });


};

