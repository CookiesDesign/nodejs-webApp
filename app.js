var express = require('express');

var app = express();

app.get('/', function(request, response){
    response.send("Hello CookiesDesign was here")
})

app.listen(3000, function(){
    console.log('Listening on port 3000');
});