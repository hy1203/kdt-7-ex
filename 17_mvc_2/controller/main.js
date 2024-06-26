const comment = require("../model/comment");

exports.main = (req, res) => {
  res.render("index");
};

exports.comments = (req, res) => {
  res.render("comments", { commentInfos: comment.commentInfos() });
};

exports.comment = (req, res) => {
  //console.log(req.params);
  const commentId = req.params.page;
  //console.log(comments[commentId - 1]);
  const comments = comment.commentInfos();

  if (commentId < 1 || commentId > comments.length) {
    res.render("404");
  }

  if (isNaN(commentId)) {
    res.render("404");
  }

  res.render("comment", { commentInfo: comments[commentId - 1] });
};
