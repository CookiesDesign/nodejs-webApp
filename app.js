/* Definicion de variables a utilizar */
var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app');
var morgan = require('morgan');

var app = express();

app.use(morgan('combined'));

app.get('/', function(request, response){
    response.send("Hello CookiesDesign was here")
})

app.listen(3000, function(){
    console.log('Listening on port ' + chalk.green('3000'));
});