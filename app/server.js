//=================================================
// Dependencies
//=================================================
var express = require('express');
var path = require('path');


//=================================================
// Tells node we are creating an Express server
//=================================================
var app = express();


//=================================================
// Sets initial port. Used later in listener.
//=================================================
var PORT = process.env.PORT || 8080;


//=================================================
// Sets up Express app to handle data parsing
//=================================================
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static(__dirname + '/public'));
//=================================================
// Routing
//=================================================
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


//=================================================
// Listener
//=================================================
app.listen(PORT, function(){
    console.log(`App listening on PORT: ${PORT}`);
});