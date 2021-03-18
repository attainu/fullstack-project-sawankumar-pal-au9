import passport from "passport";
// import dotenv from "dotenv";
import strategy from "passport-facebook";
import config from '../config.js';
import User from "../model/userModel.js";

const FacebookStrategy = strategy.Strategy;

// dotenv.config();
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(
  new FacebookStrategy(
    {
    clientID: config.facebook.FACEBOOK_APP_ID,
    clientSecret: config.facebook.FACEBOOK_APP_SECRET,
    callbackURL: "/facebook/callback",
    //   clientID: process.env.FACEBOOK_CLIENT_ID,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    //   callbackURL: process.env.FACEBOOK_CALLBACK_URL,
      profileFields: ["email", "name"]
    },
    function(accessToken, refreshToken, profile, done) {
      const { email, first_name, last_name } = profile._json;
      const userData = {
        email,
        firstName: first_name,
        lastName: last_name
      };
      new User(userData).save();
      done(null, profile);
    }
  )
);