import passport from "passport";
import passportJWT from "passport-jwt";
import { auth } from "@/models/auth";
import CustomError from "@/utils/functions";

const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;

const params = {
  secretOrKey: process.env.TOKEN_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken("jwt"),
};

const localpassport = function () {
  const strategy = new Strategy(params, async function (payload, done) {
    const user_ = await auth.getUser(payload.email);
    if (!user_) {
      return done(new CustomError(404, "Usuario no encontrado."), null);
    }

    if (payload.exp <= Date.now()) {
      return done(new CustomError(401, "El token expiró"), null);
    }

    const userData = auth.prepareUser(user_);
    return done(null, userData);
  });
  passport.use(strategy);
  return {
    initialize: function () {
      return passport.initialize();
    },
    authenticate: function () {
      return passport.authenticate("jwt", { session: false });
    },
  };
};

export default localpassport;
