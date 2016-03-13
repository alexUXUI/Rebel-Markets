var express = require('express');
var router = express.Router();
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var session = require('express-session')
var app = express();

passport.use(new GoogleStrategy({
    clientID: '584410631450-198uljradcms25p3nl7j8k4ghgnmjovu.apps.googleusercontent.com',
    clientSecret: 'Mp4vMZMwuvO9DLl-_DwVjplY',
    callbackURL: "https://rebelmarkets.herokuapp.com"
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function() {
      return done(null, profile);
    });
  }
));
passport.serializeUser(function(user,done){
  done(null, user)
})
passport.deserializeUser(function(obj,done){
  done(null, obj)
})
app.use(session({
  secret: 'keyboardcat',
  resave: true,
  saveUninitialized: true,
}))
////////////////////////////////////////////////////////////////////////////////
// use authenication
app.use(passport.initialize());
app.use(passport.session());
////////////////////////////////////////////////////////////////////////////////
// run authentication
function ensureAuthenticated(req, res, next) {
  console.log("ensureAuthenticated",req.isAuthenticated());
 if (req.isAuthenticated()) {
    return next();
  }
 res.redirect('/');
}
app.get('/auth/google', passport.authenticate('google', {
  scope: 'https://www.googleapis.com/auth/plus.login'
}));
app.get('/auth/google/callback', passport.authenticate('google', {
  failureRedirect: '/landing'
}),

function(req, res, next) {
  // Successful authentication, redirect home.
  console.log(req.user.id)
  console.log(req.user.provider);
  console.log(req.user.image);
  res.redirect('/users');
});

app.get('/logout', function(req, res, next){
  req.logout();
  res.redirect('/')
})

module.exports = router;
