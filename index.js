var express = require('express');  
var app = express();         

app.use(express.static('public'));   // serve index.html page from public folder

app.use(function (req, res) {
	res.status(404).send("Sorry, no such page!")
});

app.listen(3000, function () {
    console.log('App started on http://localhost:3000, press Ctrl-C to terminate.' );
});


