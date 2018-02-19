var express = require('express');
var app = express();


var port = 8080 //process.env.PORT;

app.get('/', function(req, res){
    res.send("Hello world!");
});

app.listen(port, function(err){
    console.log('The server is running on port:  '+ port);
});