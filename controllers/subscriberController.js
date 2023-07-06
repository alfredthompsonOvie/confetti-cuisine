import mongoose from "mongoose";
import { Subscriber } from "../models/subscriber.js";

async function saveSub() {
  const subscriber1 = new Subscriber({
    name: "alfred thompson",
    email: "tom@gmail.com"
  });
  
  let error;
  try {
    await subscriber1.save();
  } catch (err) {
    error = err;
  }
}



const getAllSubscribers = async (req, res, next) => {
  const sub = await Subscriber.find()

  req.data = sub;
  
  res.render('subscribers', {subscribers: sub})
  next();
}

export { getAllSubscribers };