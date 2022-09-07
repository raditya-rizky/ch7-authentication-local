const router = require("express").Router();
const auth = require("./controllers/authController");
const restrict = require("./middleware/restrict");

router.get("/", restrict, (req, res) => res.render("index"));

router.get("/register", (req, res) => res.render("register"));
router.post("/register", auth.register);

router.get("/login", (req, res) => res.render("login"));
router.post("/login", auth.login);

router.get("/whoami", restrict, auth.whoami);

module.exports = router;
