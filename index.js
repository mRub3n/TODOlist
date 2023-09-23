import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var todoList = [];
var checkboxState = 'checked';

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/today", (req, res) => {
  res.render("today.ejs", { todoList: todoList, checkboxState: checkboxState });
});

app.get("/work", (req, res) => {
  res.render("work.ejs");
});




app.post("/today", (req, res) => {
  const newItem = req.body.newItem;
  if (newItem) {
    todoList.push(newItem);
  }
  res.redirect("/today");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
