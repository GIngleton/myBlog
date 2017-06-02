var pages = {
  index: function(req, res){
    res.render('index');
  },
  login: function(req, res){
    res.render('login');
  },
  signup: function(req, res) {
    res.render('signup');
  }
  create: function(req, res) {
    res.render('create');
  }
}

module.exports = pages;
