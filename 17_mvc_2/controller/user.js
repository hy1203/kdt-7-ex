const user = require("../model/user");

exports.user = (req, res) => {
  res.render("user", { usreInfo: user.userInfo() });
};
