import httpStatus from "http-status-codes";

const respondNoResourceFound = (req, res) => {
  let errorCode = httpStatus.NOT_FOUND;
  res.status(errorCode);
  // res.send(`${errorCode} | The page does not exist!`);
  res.render("error")
};

const respondInternalError = (error, req, res, next) => {
  let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
  console.log(`Error ocurred: ${error.stack}`);
  res.status(errorCode);
  res.send(`${errorCode} | Sorry, our application is experiencing a problem!`);

}

export { respondNoResourceFound, respondInternalError };