import passportGoogle from 'passport-google-oauth'
import config from '../config.js';
import User from '../model/userModel.js';

const GoogleStrategy = passportGoogle.OAuth2Strategy;

//Strategy for google
export const G_Strategy = new GoogleStrategy({
    clientID: config.google.GOOGLE_CLIENT_ID,
    clientSecret: config.google.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:9800/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        User.findOne({googleId: profile.id})
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
                        googleId: profile.id
                    }

                    new User(user).save()
                        .then((user) => {
                            return done(null, user);
                        })
                }
            })
    }
);