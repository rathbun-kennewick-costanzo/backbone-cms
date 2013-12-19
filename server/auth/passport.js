var mongoose = require('mongoose'),
  LocalStrategy = require('passport-local').Strategy,
  GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
  User = mongoose.model('User'),
  config = require('../config');

module.exports = function(passport) {
  //Serialize sessions
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findOne({
      _id: id
    }, function(err, user) {
      done(err, user);
    });
  });

  //Use local strategy
  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    },
    function(email, password, done) {
      User.findOne({
        email: email
      }, function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, {
            message: 'Unknown user'
          });
        }
        if (!user.authenticate(password)) {
          return done(null, false, {
            message: 'Invalid password'
          });
        }
        return done(null, user);
      });
    }
  ));

  //Use google strategy
  passport.use(new GoogleStrategy({
      clientID: config.get('google').clientID,
      clientSecret: config.get('google').clientSecret,
      callbackURL: config.get('google').callbackURL
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOne({
        'google.id': profile.id
      }, function(err, user) {
        User.count({}, function(err, count) {
          if (!user && count === 0) {
            user = new User({
              name: profile.displayName,
              email: profile.emails[0].value,
              username: profile.username,
              provider: 'google',
              google: profile._json
            });
            user.save(function(err) {
              if (err) console.log(err);
              return done(err, user);
            });
          }
          else if (user) {
            return done(err, user);
          }
          else {
            return done(null, false);
          }
        });
      });
    }
  ));
};