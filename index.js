var express = require('express'),
    hbs = require('hbs'),
    bcrypt = require('bcrypt-nodejs'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    //User = require('./user'),
    //localAuth = require('./auth'),
    path = require('path'),
    routes = require('./app/routes/routes'),
    app = express();


  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
  	extended: true
  }));
  app.use("/static", express.static(path.join(__dirname, "app/client")));
  app.use(session({
    secret: 'itsASecret',
    resave: true,
    saveUninitialized: true
  }));

    app.use(passport.initialize());
    app.use(passport.session());



    app.set("view engine", "hbs");
    app.set('views', path.join(__dirname, 'app/views'));

  //localAuth(passport);

  mongoose.connect('mongodb://localhost/user');

  routes(app);  //injects express funtionality into routes

app.listen(8080);
console.log('Server is running');
