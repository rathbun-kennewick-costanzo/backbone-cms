module.exports = function(app, passport, auth) {
  var users = require('../controllers/users.js');

  // route index.html
  app.get('/users', auth.redirectToSignUp, auth.userLoggedIn, users.index);
  app.get('/users/signup', auth.redirectToSignIn, auth.redirectLoggedIn, users.signup);
  app.get('/users/signin', auth.redirectToSignUp, auth.redirectLoggedIn, users.signin);
  app.get('/users/signout', users.signout);

  //Setting up the users api
  app.post('/users', users.create);

  app.post('/users/session', passport.authenticate('local', {
    failureRedirect: '/users/signin',
    failureFlash: 'Invalid email or password.'
  }), users.session);

  //app.get('/users/me', users.me);
  //app.get('/users/:userId', users.show);

  app.get('/api/v1/users', users.getUser);

  //Setting the google oauth routes
  app.get('/auth/google', passport.authenticate('google', {
    failureRedirect: '/users/signin',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ]
  }), users.signin);

  app.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/users/signin'
  }), users.authCallback);

  //Finish with setting up the userId param
  //app.param('userId', users.user);

  //Home route
  //Eventually move index route here
  //var index = require('../app/controllers/index');
  //app.get('/', index.render);



};