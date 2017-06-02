//create a function that creates a new blog post
var post = require("../../models/blogPost.js");

var newPost = function(req, res){
  new post({
    title: req.body.title,
    post: req.body.post,
  }).save(function(err){
    console.log(err);
  }else{
    res.redirect("/index")
  });
}
