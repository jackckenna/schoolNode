function indexHome(req, res) {
  res.render("home/index", {
    
  });
}

module.exports = {
  index: indexHome
  };