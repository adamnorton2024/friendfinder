//=================================================
// Dependencies
//=================================================

var path = require('path');


//=================================================
// Routing
//=================================================
module.exports = function(app){
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/images/background.jpg", function(req, res){
        res.sendFile(path.join(__dirname, "../public/images/backgound.jpg"));
    });
};