"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = require("express-handlebars");
const app = (0, express_1.default)();
app.engine(".hbs", (0, express_handlebars_1.engine)({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./pages");
app.get("/", (req, res) => {
    res.render("index", { title: 'Home' });
});
app.get("/about", (req, res) => {
    res.render("about", { title: 'About' });
});
app.get("/contact", (req, res) => {
    res.render("contact", { title: 'Comtact' });
});
app.listen(888, () => {
    console.log("Server is running on http://localhost:888");
});
