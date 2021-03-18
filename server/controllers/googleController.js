import express from 'express';
import passport from 'passport';
import session from 'express-session';
import passportGoogle from 'passport-google-oauth'
import config from '../config.js';
import User from '../model/userModel.js';
// const router = express.Router();
const GoogleStrategy = passportGoogle.OAuth2Strategy;
//start passpot
// router.use(passport.initialize());
// router.use(passport.session());
// passport.serializeUser((user,cb) => {
//     cb(null,user)
// })
// passport.deserializeUser(function(obj, cb) {
//     cb(null, obj);
//   });

export const strategy = new GoogleStrategy({
    clientID: config.google.GOOGLE_CLIENT_ID,
    clientSecret: config.google.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:9800/google/callback",
    // profileFields: ['id', 'emails', 'name','displayName'] 
  },
  function(accessToken, refreshToken, profile, done) {
    console.log("profile")
    userProfile = profile
    console.log(profile)
    User.findOne({
      'google.sub': profile.id 
  }, function(err, user) {
      if (err) {
          return done(err);
      }
      //No user was found... so create a new user with values from Facebook (all the profile. stuff)
      if (!user) {
          user = new User({
              name: profile.displayName,
              provider: profile.provider,
              email: profile._json.email,
              google: profile._json
              //now in the future searching on User.findOne({'facebook.id': profile.id } will match because of this next line
              
          });
          
          user.save(function(err) {
              if (err) console.log(err);
              return done(err, user);
          });
      } else {
          //found user. Return
          return done(err, user);
      }
  });
}
);

export const toGoogle = () => {
    console.log("google")
    passport.authenticate('google', {
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ]
    });
}

// when done with google it comes to this 
export const fromGoogle = () => {
  passport.authenticate('google', { failureRedirect: '/err' }),
  function(req, res) {
    res.redirect('/');
//     //for react
//   passport.authenticate('google', { failureRedirect: 'http://localhost:3000/login' }),
//   function(req, res) {
//     res.redirect('http://localhost:3000/home');
  };
  }