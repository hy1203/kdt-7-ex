const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/views"));

app.get("/", function (req, res) {
  res.render("index2");
});

app.post("/postform", function (req, res) {
  console.log(req.body);
  res.render("result2", {
    userInfo: req.body,
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
