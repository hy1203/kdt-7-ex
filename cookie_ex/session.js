const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;
require("dotenv").config();

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    name: "my-session",
  })
);

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "views"));

app.get("/", (req, res) => {
  req.session.name = "홍길동";
  res.render("session");
});

app.get("/getSession", (req, res) => {
  res.send({ name: req.session.name });
});

app.listen(PORT, () => {
  console.log(`http://localhost${PORT}`);
});
