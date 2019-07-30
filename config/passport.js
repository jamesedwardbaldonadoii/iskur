const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const config = require("../config/keys");
const FacebookStrategy  = require('passport-facebook').Strategy

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );

  passport.use(
    new FacebookStrategy({
      clientID: config.facebook.API_KEY,
      clientSecret: config.facebook.API_SECRET,
      callbackURL: config.facebook.CALLBACK_URL,
      passReqToCallback: true,
      profileFields: ['id', 'emails', 'name']
    }, (req, accessToken, refreshToken, profile, done) => {
      process.nextTick(function () {
      
        console.log(accessToken, 'asdfasdfsdfasdfdsaf');
        console.log(refreshToken, 'asdfasdfsdfasdfdsaf');
        console.log(profile, 'asdfasdfsdfasdfdsaf');
        // To keep the example simple, the user's Facebook profile is returned to
        // represent the logged-in user.  In a typical application, you would want
        // to associate the Facebook account with a user record in your database,
        // and return that user instead.
        return done(null, profile);
      });
      }
    )
  );
};
