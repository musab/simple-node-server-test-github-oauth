const config = require("./config");
const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});
passport.use(
  new GitHubStrategy(
    {
      clientID: config.OAUTH_APP_CLIENT_ID,
      clientSecret: config.CLIENT_SECRET,
      callbackURL: "http://localhost:8000/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log("*******GitHub User Info*************");
      console.log("accessToken", accessToken);
      console.log("refreshToken", refreshToken);
      console.log("profile", profile);
      console.log("*******GitHub User Info*************");
      return done(null, profile);
    }
  )
);
