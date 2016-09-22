var express = require('express');
var mongoose = require('mongoose');
var app = express();
var routes = require('./config/routes');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var layouts = require('express-ejs-layouts');
var session = require('express-session');


mongoose.connect("mongodb://localhost/students");

var User = require('./models/user');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended:false }));

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: "iwanttobeinamerica"
}));

// load current user
app.use(function(req,res,next) {

  if(!req.session.user) {
    res.locals.user = false;
    next();
  } else {

    User.findById(req.session.user, function(err, user) {

      if (user) {
        req.user = user;
        res.locals.user = user;
      } else {
        req.session.user = null;
        delete res.locals.user;
      }

      next(err);
    });
  }
});

// check for login on all routes except sessions
app.use(/^\/(?!sessions|users).*/, function(req, res, next) {
  if (!req.user) {
    res.redirect('/sessions/new');
  } else {
    next();
  }
});

app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}))

app.use(layouts);

app.use(routes);

// listen to the server
app.listen(process.env.PORT || 3000 , function(){
  //console.log('app is listening on port 3000');
});

module.exports = app;