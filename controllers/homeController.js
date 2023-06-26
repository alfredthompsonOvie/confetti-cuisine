
const courses = [
  {
    title: "Event Driven Cakes",
    cost: 50
  },
  {
    title: "Asynchronous Artichoke",
    const: 25
  },
  {
    title: "Object Oriented Orange Juice",
    cost: 10
  }
];


const homeController = (req, res) => {
  // let paramsName = req.params.myName;
  res.render("index");
}

const showCourses = (req, res) => {
  res.render("courses", {offeredCourses: courses});
}
const showSignUp = (req, res) => {
  res.render("contact");
}
const postedSignUpForm = (req, res) => {
  res.render("thanks");
}

export {
  homeController,
  showCourses,
  showSignUp,
  postedSignUpForm,
}