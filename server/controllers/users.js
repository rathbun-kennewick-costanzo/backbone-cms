/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  path = require('path'),
  User = mongoose.model('User');

/**
 * Auth callback
 */
exports.authCallback = function(req, res, next) {
  //res.redirect('/');
  res.sendfile(path.join(__dirname, '../../app/static-temps/signedin.html'));
};

/**
 * Show login form
 */
exports.signin = function(req, res) {
  /*res.render('users/signin', {
    title: 'Signin',
    message: req.flash('error')
  });
*/
  console.log('IN SIGNIN');
  res.sendfile(path.join(__dirname, '../../app/static-temps/signin.html'));
};

/**
 * Show sign up form
 */
exports.signup = function(req, res) {
  /*res.render('users/signup', {
    title: 'Sign up',
    user: new User()
  });*/
  res.sendfile(path.join(__dirname, '../../app/static-temps/signup.html'));
};

/**
 * Logout
 */
exports.signout = function(req, res) {
  req.logout();
  //res.redirect('/signin');
  res.sendfile(path.join(__dirname, '../../app/static-temps/signin.html'));
};

/**
 * Session
 */
exports.session = function(req, res) {
  //res.redirect('/');
  res.sendfile(path.join(__dirname, '../../app/static-temps/signedin.html'));
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
      /*return res.render('users/signup', {
        errors: err.errors,
        user: user
      });*/
      console.log("ERROR CREATING USER: " + err);
      return res.sendfile(path.join(__dirname, '../../app/static-temps/signup.html'));
    }
    req.logIn(user, function(err) {
      if (err) return next(err);
      return res.sendfile(path.join(__dirname, '../../app/static-temps/signedin.html'));
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