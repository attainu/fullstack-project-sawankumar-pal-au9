import passportFacebook from "passport-facebook";
import config from '../config.js';
import User from "../model/userModel.js";

const FacebookStrategy = passportFacebook.Strategy;

// Facebook Strategy
export const F_Strategy = new FacebookStrategy({
    clientID: config.facebook.FACEBOOK_APP_ID,
    clientSecret: config.facebook.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:9800/auth/facebook/callback",
    profileFields: ['id', 'email', 'gender', 'link', 'locale', 'displayName', 'timezone', 'updated_time', 'verified']
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({facebookId: profile.id})
      .then((user) => {
          if(user) {
            return done(null, user);
          }else {
              let user = {
                  name: profile.displayName,
                  email: profile.emails[0].value,
                  role: "User",
                  isActive: true,
                  provider: profile.provider,
                  facebookId: profile.id
              }
              new User(user).save()
                .then((user) => {
                  return done(null, user);
                })
          }
      })
  }
);