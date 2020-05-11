const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('User');
const keys = require('./keys');

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); // built in method to passport-jwt
options.secretOrKey = keys.secretOrKey;

// this returns the user referenced within the payload
module.exports = passport => {
  passport.use(new JwtStrategy(options, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
      .then(user => {
        if (user) {
          return done(null, user) // this returns user to frontend
        }
        return done(null, false) // return false because no user
      })
      .catch(err => console.log(err))
  }));
};
