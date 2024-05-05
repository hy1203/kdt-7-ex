const login = require("../model/login_info");

exports.login = (req, res) => {
  res.render("login");
};
exports.user = (req, res) => {
  if (
    req.body.id === login.loginInfo()[0].id &&
    req.body.pw === login.loginInfo()[0].pw
  ) {
    res.send({ result: true, userInfo: req.body, msg: "성공하였습니다." });
  } else {
    res.send({ result: false, msg: "로그인 실패" });
  }
};
