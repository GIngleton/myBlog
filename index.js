var express = require('express'),
    hbs = require('hbs'),
    bcrypt = require('bcrypt-nodejs'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    User = require('./user'),
    localAuth = require('./auth'),
    path = require('path')
    app = express();

    app.use('/client', path.join(__dirname, 'app/client'));
    app.set("view engine", "hbs");
    app.set('views', path.join(__dirname, 'app/views'));


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
  	extended: true
  }));

  app.use(session({
    secret: 'itsASecret',
    resave: true,
    saveUninitialized: true
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  localAuth(passport);

  mongoose.connect('mongodb://localhost/user');


app.listen(8080);
console.log('Server is running');
