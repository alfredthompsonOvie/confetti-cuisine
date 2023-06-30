// import './style.css'

import express from "express";
import layouts from "express-ejs-layouts";
import {
  homeController,
  showCourses,
  showSignUp,
  postedSignUpForm,
} from "./controllers/homeController.js";
import { respondNoResourceFound, respondInternalError } from "./controllers/errorController.js";

import { Subcriber } from "./models/subcriber.js";

const port = 5173;
const app = express();

app.set("port", process.env.PORT || port);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(layouts);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get('/', homeController);
app.get('/courses', showCourses);
app.get('/contact', showSignUp);
app.post('/contact', postedSignUpForm);

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

// subscriber js

// Subcriber.create({
//   name: "The Batman",
//   email: "batman@gmail.com"
// }
// )

const subscriber1 = new Subcriber({
  name: "alfred thompson",
  email: "tom@gmail.com"
});
subscriber1.save();

app.use(respondNoResourceFound);
app.use(respondInternalError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${ app.get("port")}`);
  })
