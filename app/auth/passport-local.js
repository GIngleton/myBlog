var LocalStrategy = require("passport-local").Strategy,
    User = require("../models/userModel"),
    bcrypt = require("bcrypt-nodejs");

module.exports = function(passport){
//serialize puts info into req.user object
  passport.serializeUser(function(user, done){
    done(null, user);
  });
//deserialize pulls user info out of user object
  passport.deserializeUser(function(id, done){
    done(null, id);
  });
  passport.use("local-login", new LocalStrategy({
    usernameField: "username",
    passwordField: "password",
    passReqToCallBack: true
  }, function(request, username, password, done){
    User.findOne({ username: username }, function (err, user) {
      if(err) {
        return done(err);
      }
      if (!user){
        return done(null, false);
      }
      if(!bcrypt.compareSync(password, user.password)) {
        return done(null, false);
      }
      if (user && bcrypt.compareSync(password, user.password)) {
        return done(null, user);
      }
    });
  }));
}
