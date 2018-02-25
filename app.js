var express = require('express');
var app = express();


app.set('port',()app.get('/', function(req, res){
    res.send("Hello world!");
});

app.listen(port, function(err){
    console.log('The server is running on port:  '+ port);
});