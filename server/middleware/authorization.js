var mongoose = require('mongoose'),
  User = mongoose.model('User');

/**
 * Generic require login routing middleware
 */
exports.requiresLogin = function(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.send(401, 'User is not authorized');
  }
  next();
};

exports.redirectLoggedIn = function(req, res, next) {
  var id = req.session.passport.user;
  console.log(id);
  if (id) {
    User.findById(id, function(err, user) {
      if (user)
        return res.redirect('/users');
      else
        next();
    });
  }
  else {
    next();
  }
};

exports.redirectToSignUp = function(req, res, next) {
  console.log("redirecting to signup");
  User.count({}, function(err, count) {
    console.log("The user count is " + count);
    if (count === 0)
      return res.redirect('/users/signup');
    else
      next();
  });
};

exports.redirectToSignIn = function(req, res, next) {
  console.log("redirecting to signin");
  User.count({}, function(err, count) {
    console.log("The user count is " + count);
    if (count > 0)
      return res.redirect('/users/signin');
    else
      next();
  });
};

exports.userLoggedIn = function(req, res, next) {
  console.log("In userLoggedIn");
  if (!req.session.passport.user)
    return res.redirect('/users/signin');
  next();
};


/**
 * User authorizations routing middleware
 
exports.user = {
  hasAuthorization: function(req, res, next) {
    if (req.profile.id != req.user.id) {
      return res.send(401, 'User is not authorized');
    }
    next();
  }
};

/**
 * Article authorizations routing middleware
 
exports.article = {
  hasAuthorization: function(req, res, next) {
    if (req.article.user.id != req.user.id) {
      return res.send(401, 'User is not authorized');
    }
    next();
  }
};
*/