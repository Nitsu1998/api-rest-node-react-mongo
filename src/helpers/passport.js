import passport from "passport";
import { Strategy } from "passport-local";
import { UserDao } from "../models/index.js";
import { hashPassword, isValidPassword } from "./helpers.js";
import newMail from "./nodemailer.js";

function auth(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  const registerStrategy = new Strategy(
    { passReqToCallback: true },
    async (req, username, password, done) => {
      try {
        const existingUser = await UserDao.collection.findOne({ username });

        if (existingUser) {
          return done(null);
        }

        const newUser = {
          username,
          password: hashPassword(password),
          email: req.body.email,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          phone: req.body.phone,
        };

        const createUser = await UserDao.collection.create(newUser);
        await newMail("New Register", newUser);

        done(null, createUser);
      } catch (err) {
        console.log(err);
        done("Error signup user", null);
      }
    }
  );

  const loginStrategy = new Strategy(async (username, password, done) => {
    try {
      const user = await UserDao.collection.findOne({ username });

      if (!user || !isValidPassword(password, user.password)) {
        return done(null);
      }

      done(null, user);
    } catch (err) {
      console.log(err);
    }
  });

  passport.use("register", registerStrategy);
  passport.use("login", loginStrategy);
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  passport.deserializeUser((id, done) => {
    UserDao.collection.findById(id, done);
  });
}

export default auth;
