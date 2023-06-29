// import mongoose from "mongoose";
import mongoose from "mongoose";

const mongoose = mongoose();

const subscriberSchema = mongoose.Schema({
  name: String,
  email: String,
});
const model = mongoose.model("Subcriber", subscriberSchema)
export { model };

