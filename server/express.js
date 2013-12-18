/**
 * Module dependencies.
 */
var express = require('express'),
  mongoStore = require('connect-mongo')(express),
  flash = require('connect-flash'),
  path = require('path'),
  config = require('./config'),
  engines = require('consolidate'),
  slash = require('express-slash'),
  mongoose = require('mongoose'),
  PortfolioEntry = mongoose.model('PortfolioEntries'),
  Settings = mongoose.model('Settings'),
  restify = require('express-restify-mongoose');


module.exports = function(app, passport, db) {
  app.set('showStackError', true);

  //Prettify HTML
  app.locals.pretty = true;

  //Enable strict routing
  app.enable('strict routing');

  //Should be placed before express.static
  app.use(express.compress({
    filter: function(req, res) {
      return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
    },
    level: 9
  }));

  //Setting the fav icon and static folder
  app.use(express.static(path.join(__dirname, '../app')));
  app.use(express.static(path.join(__dirname, '../.tmp')));

  // simple log
  app.use(function(req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
  });

  //Don't use logger for test env
  if (process.env.NODE_ENV !== 'test') {
    app.use(express.logger('dev'));
  }

  //Set views path, template engine and default layout
  app.set('port', config.get('PORT'));
  app.set('view engine', 'handlebars');
  app.set('views', __dirname + '/views');
  app.engine('.html', engines.handlebars);

  //Enable jsonp
  app.enable("jsonp callback");

  app.configure(function() {
    //cookieParser should be above session
    app.use(express.cookieParser());

    //bodyParser should be above methodOverride
    app.use(express.bodyParser());
    app.use(express.methodOverride());

    //express-restify-mongoose
    restify.serve(app, PortfolioEntry, {
      plural: false
    });
    restify.serve(app, Settings, {
      plural: false
    });

    //express/mongo session storage
    app.use(express.session({
      secret: 'WATSECRET',
      store: new mongoStore({
        db: db.connection.db,
        collection: 'sessions'
      })
    }));

    //connect flash for flash messages
    app.use(flash());

    //use passport session
    app.use(passport.initialize());
    app.use(passport.session());

    //routes should be at the last
    app.use(app.router);
    app.use(slash());

    //Assume "not found" in the error msgs is a 404. this is somewhat silly, but valid, you can do whatever you like, set properties, use instanceof etc.
    app.use(function(err, req, res, next) {
      //Treat as 404
      if (~err.message.indexOf('not found')) return next();

      //Log it
      console.error(err.stack);

      //Error page
      res.status(500).render('500', {
        error: err.stack
      });
    });

    //Assume 404 since no middleware responded
    app.use(function(req, res, next) {
      res.status(404).render('404', {
        url: req.originalUrl,
        error: 'Not found'
      });
    });

  });
};