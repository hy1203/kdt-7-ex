const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const PORT = 8000;

const cookieOption = {
  maxAge: 3000,
};

//쿠키
app.use(cookieParser());

//세션
app.use(
  session({
    secret: "secret key",
  })
);

//템플릿
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "views"));

//router
app.get("/", (req, res) => {
  //쿠키요청
  res.cookie("apple", "kdt7", cookieOption);
  res.cookie("samsung", "web", cookieOption);
  //세션 설정
  req.session.user = {
    userid: "asdf",
    name: "홍길동",
  };
  res.render("index", { data: req.cookies.apple, data2: req.cookies.samsung });
});

//세션확인용
app.get("/get", (req, res) => {
  console.log(req.session.user);
});
app.listen(PORT, () => {
  console.log(`http://localhost${PORT}`);
});

//쿠키와 세션차이
//1.쿠키는 서버의 자원을 사용하지 않고, 세션은 서버의 자원을 사용한다.
//2.보안적인 측면은 쿠키보다 세션이 우수하다.
//  1)쿠키는 클라이언트(브라우저)에 저장되기 떄문에 변질되거나 해킹당할 위험이 존재
//  2)세션은 세션ID만 저장하고 서버에서 처리하기 때문에 보안이 비교적 높음
//3.속도에서는 쿠키가 세션보다 더 우수하다.
