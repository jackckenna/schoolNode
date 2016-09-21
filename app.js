var express = require('express');
var app = express();
var routes = require('./config/routes');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var layouts = require('express-ejs-layouts');


<<<<<<< HEAD

=======
>>>>>>> a9ce4e037150b371aa5dbf495813d708079067b7

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended:false }));

app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}))

app.use(routes);

app.use(layouts);

app.use(routes);

// listen to the server
app.listen(process.env.PORT || 3000 , function(){
  console.log('app is listening on port 3000');
});
