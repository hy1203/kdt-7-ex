const express = require("express");
const app = express();
const PORT = 8080;

//템플릿
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
const loginRouter = require("./routes/login");
app.use("/ex", loginRouter);

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
