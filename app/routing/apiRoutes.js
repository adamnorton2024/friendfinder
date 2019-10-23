// Load Data
//===========================================
var friends = require("../data/friends");



//============================================
// Routing
//=============================================

module.exports = function(app){
    
    // List of ALL friend entries
    app.get("api/friends", function(req, res){
        res.json(friends);
    });



    app.post("api/friends", function(req, res){
        
        // User Input
        var userInput = req.body;
        var userAnswers = userInput.scores;

        // Variables to find match
        var bestFriendIndex = 0;
        var score = 100;

        // Loop through entire friends list
        for (let i = 0; i < friends.length; i++) {
            var difference = 0;

           // Loop through each answer to find abs difference
            for (let j = 0; j < userAnswers.length; j++) {
                difference += Math.abs(friends[i].scores[j] - userAnswers[j]);
            };

            // Set lowest difference to match
            if (difference < score) {
                score = difference;
                bestFriendIndex = i;
            };
            
        };

        var bestFriendMatch = friends[bestFriendIndex];

        // Send response
        res.json(bestFriendMatch);

    });
};

