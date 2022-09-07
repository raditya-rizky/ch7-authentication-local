const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("express-flash");
// require passport
const passport = require("./lib/passport");
const { PORT = 8000 } = process.env;

// Pertama, setting request body parser
// body parser harus ditaruh paling atas

app.use(express.urlencoded({ extended: false }));

// Kedua, setting session handler
app.use(
  session({
    secret: "Buat ini jadi rahasia",
    resave: true,
    saveUninitialized: false,
  })
);

// Ketiga, setting flash
app.use(flash());

// setting passport setelah flash dan session
app.use(passport.initialize());
app.use(passport.session());

// Keempat, setting view engine
app.set("view engine", "ejs");

// Kelima, setting router
const router = require("./router");
app.use(router);

app.listen(PORT, () => {
  console.log(`Server nyala di port ${PORT}`);
});
