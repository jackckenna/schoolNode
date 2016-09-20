var express = require('express');
var app = express();
var routes = require('./config/routes');
var ejs = require('ejs');
var layouts = require('express-ejs-layouts');


app.use(routes);

app.set('view engine', 'ejs');

app.use(layouts);

// listen to the server 
app.listen(3000 , function(){
  console.log('app is listening on port 3000');
});