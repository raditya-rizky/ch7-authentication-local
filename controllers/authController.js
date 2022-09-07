const { User } = require("../models");
const passport = require("../lib/passport");

module.exports = {
  register: async (req, res, next) => {
    try {
      await User.register(req.body);
      res.redirect("/login");
    } catch (err) {
      next(err);
    }
  },

  login: passport.authenticate("local", {
    successRedirect: "/whoami",
    failureRedirect: "/login",
    failureFlash: true,
  }),

  whoami: (req, res) => {
    res.render("profile", req.user.dataValues);
  },
};
