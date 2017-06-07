//checks if user is logged in

module.exports = function(req, res, next){
  if(!req.user){
    res.redirect("/login");
  } else (
    next();
  )
}
