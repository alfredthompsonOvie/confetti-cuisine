// import './style.css'

import express from "express";
import expressLayouts from "express-ejs-layouts";
import { homeController } from "./controllers/homeController.js";

const port = 5173;
const app = express();

app.set("port", process.env.PORT || port);
app.set("view engine", "ejs");

app.use(expressLayouts);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get('/', homeController);

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send('Post Successful!')
})

app.get("/items/:vegetable", (req, res) => {
  console.log("------------veg--------------");
  console.log(req.params);
  console.log(req.body);
  console.log(req.url);
  console.log(req.query);


  let veg = req.params.vegetable;

  res.send(`This is the page for ${veg}`)
});


app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${ app.get("port")}`);
  })
