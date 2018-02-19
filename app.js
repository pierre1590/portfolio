var express = require('express');
var app = express();


var port = 8080 //process.env.PORT;
app.listen(port, function(err){
    console.log('The server is running on port:  '+ port);
});