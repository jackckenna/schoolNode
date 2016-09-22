var User = require('../models/user');

function newSession(req, res) {
  res.render('sessions/new', { title: "Login" });
}

function createSession(req, res) {
  User.findOne({email: req.body.email}, function(err, user){

    if (user && user.password == req.body.password) {
      req.session.user = user.id;
      res.redirect("/");

    } else {

      if (err) {
        console.log(err.message);
      } else {
        console.log("There's no user with those credentials!");
      }

      res.redirect("/sessions/new");
    }
  });
}

function deleteSession(req, res) {
  console.log(req.session);
  delete req.session.user;

  res.redirect('/sessions/new');
}

module.exports = {
  new: newSession,
  create: createSession,
  delete: deleteSession
}
