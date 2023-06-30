// import mongoose from "mongoose";
import mongoose from "mongoose";
const { Schema } = mongoose;

mongoose.connect("mongodb://127.0.0.1:27017/recipe_db");
const db = mongoose.connection;

const subscriberSchema = new Schema({
  name: String,
  email: String,
});
// zipCode: Number
const Subcriber = mongoose.model("Subcriber", subscriberSchema)

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

export { Subcriber };

