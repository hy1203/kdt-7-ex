const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/views"));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/getForm", function (req, res) {
  console.log(req.query);
  //   res.send("get 요청 성공");
  res.render("result", {
    title: "GET 폼 요청 결과 확인하기",
    userInfo: req.query,
  });
});

app.post("/postForm", function (req, res) {
  console.log(req.body);
  //   res.send("POST 요청 성공");
  res.render("result", {
    title: "POST 요청 폼 결과 확인하기",
    userInfo: req.body,
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
