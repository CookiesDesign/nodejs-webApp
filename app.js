/* Definicion de variables a utilizar */
var express = require('express');
/* var chalk = require('chalk');
var debug = require('debug')('app');
var morgan = require('morgan');
 */
var app = express();

var port = 5000;

/* app.use(morgan('combined')); */

/* app.get('/', function(request, response){
    response.send("Hello CookiesDesign was here")
})

app.listen(3000, function(){
    console.log('Listening on port ' + chalk.green('3000'));
});
 */

app.use(express.static('public'));
app.use(express.static('src/views'));


app.get('/', function(req, res){
    res.send('Hello World');
});

app.get('/books', function(req, res){
    res.send('Hello Books');
});

app.listen(port, function(err){
    console.log('running server on port ' + port);
});