/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  path = require('path'),
  User = mongoose.model('User');


exports.index = function(req, res, next) {
  res.render('users/index.html');
}
/**
 * Auth callback
 */
exports.authCallback = function(req, res, next) {
  res.redirect('users');
};

/**
 * Show login form
 */
exports.signin = function(req, res) {
  res.render('users/signin.html');
};

/**
 * Show sign up form
 */
exports.signup = function(req, res) {
  res.render('users/signup.html');
};

/**
 * Logout
 */
exports.signout = function(req, res) {
  req.logout();
  res.redirect('users/signin');
};

/**
 * Session
 */
exports.session = function(req, res) {
  res.redirect('users/');
};

/**
 * Create user
 */
exports.create = function(req, res) {
  var user = new User(req.body);
  console.log("USER IS: " + user);
  console.log("BODY IS: " + JSON.stringify(req.body));
  user.provider = 'local';
  user.save(function(err) {
    if (err) {
      return res.render('users/signup.html', {
        errors: err.errors,
        user: user
      });
    }
    req.logIn(user, function(err) {
      if (err) return next(err);
      return res.redirect('users/');
    });
  });
};

/**
 *  Show profile
 
exports.show = function(req, res) {
  var user = req.profile;

  res.render('users/show', {
    title: user.name,
    user: user
  });
};
*/
/**
 * Send User
 */
exports.me = function(req, res) {
  res.jsonp(req.user || null);
};

/**
 * Find user by id
 */
exports.user = function(req, res, next, id) {
  User
    .findOne({
      _id: id
    })
    .exec(function(err, user) {
      if (err) return next(err);
      if (!user) return next(new Error('Failed to load User ' + id));
      req.profile = user;
      next();
    });
};