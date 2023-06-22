// import './style.css'

import express from 'express'

const port = 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get('/', (req, res) => {
  console.log(req.params);
  console.log(req.body);
  console.log(req.url);
  console.log(req.query);
  res.send('Hello, Universe!')
});

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


app.listen(port, () => {
  console.log(`The Express.js server has started and is listening on port number: ${port}`);
  })
