'use strict';

var express = require('express'),
  http = require('http'),
  path = require('path'),
  async = require('async'),
  hbs = require('express-hbs'),
  passport = require('passport'),
  mongoose = require('mongoose'),
  fs = require('fs');

//load configuration
var config = require('./config');

// start mongoose
var db = mongoose.connect(config.get('db'));
var dbConnection = mongoose.connection;

dbConnection.on('error', console.error.bind(console, 'connection error:'));
dbConnection.once('open', function callback() {

  //Bootstrap models
  var models_path = __dirname + '/models';
  var walk = function(path) {
    fs.readdirSync(path).forEach(function(file) {
      var newPath = path + '/' + file;
      var stat = fs.statSync(newPath);
      if (stat.isFile()) {
        if (/(.*)\.(js|coffee)/.test(file)) {
          require(newPath);
        }
      }
      else if (stat.isDirectory()) {
        walk(newPath);
      }
    });
  };
  walk(models_path);

  console.log("GOOGLE IS " + JSON.stringify(config.get('google')));

  //passport
  require('./auth/passport')(passport);

  var app = express();

  //configure express
  require('./express.js')(app, passport, db);


  //configure routes
  require('./routes/routes.js')(app, passport);
  /*
  app.configure(function() {
    app.set('port', config.get('PORT'));
    app.set('view engine', 'handlebars');
    app.set('views', __dirname + '../app/scripts/views');
  });

  // simple log
  app.use(function(req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
  });

  // mount static
  app.use(express.static(path.join(__dirname, '../app')));
  app.use(express.static(path.join(__dirname, '../.tmp')));
*/


  // start server
  http.createServer(app).listen(app.get('port'), function() {
    console.log('Express App started!');
  });
});