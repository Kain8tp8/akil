import express from "express";
import { engine } from "express-handlebars";

const app = express();

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./pages");

app.get("/", (req, res) => {
  res.render("index", { title: "Home", juratbek: "*" });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About", muxtor: "*" });
});

let phone = [
  { name: "Javahir",  number: '97 - 364 - 51 - 59' },
  { name: "Olimjon",  number: '88 - 517 - 72 - 66' },
  { name: "Juratbek", number: '93 - 467 - 12 - 70' },
  { name: "Muhtor",   number: '93 - 123 - 45 - 67' },
  { name: "Abror",    number: '91 - 916 - 46 - 45' },
  { name: "Temur",    number: '94 - 239 - 43 - 88' },
];
app.get("/contact", (req, res) => {
  res.render("contact", {contacts: phone, title: "Comtact", timur: "*" });
});

app.listen(888, () => {
  console.log("Server is running on http://localhost:888");
});
