var auth = require("../../auth/local-signup");
var Post = require("../../models/blogModel");

var pages = {
  home: function(req, res){
    res.render("home");
  },
  index: function(req, res){
    Post.find({"user": req.username}, function(err, post){
      if(err){
        console.log(err);
      } else {
        res.render("index", {
          status: req.query.status,
          posts: post
        });
      }
    });
  },
  login: function(req, res){
    res.render("login");
  },
  signup: function(req, res){
    auth({
      name: req.body.username,
      pass: req.body.password,
      first: req.body.firstName,
      last: req.body.lastName
    }, function(data){
      if(data.success){
        res.json({
          "success": "All good"
        });
      } else {
        res.json({
          "success": "Messed up"
        });
      }
    });
  },
  post: function(req, res){
    Post.findOne({"_id": req.query.p}, function(err, post){
      if(err){
        console.log(err);
      } else{
        res.render("post", {
          current: post
        });
      }
    })
  }

module.exports = pages;

//var pages = {
  //index: function(req, res){
    //res.render('index');
  //},
  //login: function(req, res){
    //res.render('login');
  //},
  //signup: function(req, res) {
    //res.render('signup');
  //}
  //create: function(req, res) {
    //res.render('create');
  //}
//}

//module.exports = pages;
