import express from "express";
import { engine } from "express-handlebars";

const app = express();

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./pages");

app.get("/", (req, res) => {
  res.render("index", {title:'Home'});
});
app.get("/about", (req, res) => {
  res.render("about", {title:'About'});
});
app.get("/contact", (req, res) => {
  res.render("contact", {title:'Comtact'});
});

app.listen(888, () => {
  console.log("Server is running on http://localhost:888");
});
