const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt7",
});

exports.signupInfo = (data, callback) => {
  conn.query(
    `INSERT INTO user (userid,name,pw) VALUES ('${data.userid}','${data.name}','${data.pw}');`,
    function (err, rows) {
      if (err) {
        console.log(err);
      }
      callback(rows.insertId);
    }
  );
};

exports.loginConfirm = (data, callback) => {
  conn.query(
    `SELECT * FROM user WHERE userid='${data.id}' && pw='${data.pw}';`,
    function (err, rows) {
      if (err) {
        console.log(err);
      }
      console.log(rows);
      callback(true);
    }
  );
};
