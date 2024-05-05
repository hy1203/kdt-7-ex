const express = require("express");
const app = express();
const PORT = 3333;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/views"));

app.get("/", function (req, res) {
  res.render("index1");
});

app.get("/getform", function (req, res) {
  console.log(req.query);
  res.render("result1", {
    userInfo: req.query,
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
