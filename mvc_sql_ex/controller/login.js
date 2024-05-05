const loginInfo = require("../model/login");
exports.main = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};

exports.signupReg = (req, res) => {
  loginInfo.signupInfo(req.body, (value) => {
    res.send({
      result: true,
      id: value,
      userid: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    });
  });
};

exports.login = (req, res) => {
  res.render("login");
};

exports.loginCon = (req, res) => {
  loginInfo.loginConfirm(req.body, (value) => {
    res.send({
      result: value,
      id: req.body.id,
      pw: req.body.pw,
    });
  });
};
