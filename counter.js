// export function setupCounter(element) {
//   let counter = 0
//   const setCounter = (count) => {
//     counter = count
//     element.innerHTML = `count is ${counter}`
//   }
//   element.addEventListener('click', () => setCounter(counter + 1))
//   setCounter(0)
// }

const port = 3000;
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World");
}).listen(port, () => {
  console.log(`The Express.js server has started and is listening on port number: ${port}`);
})