
import mongoose from "mongoose";
const { Schema } = mongoose;

mongoose.connect("mongodb://127.0.0.1:27017/recipe_db");
const db = mongoose.connection;

const subscriberSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email:  {
    type: String,
    required: true,
    unique: true,
  },
  zipCode:  {
    type: Number,
    min: [10000, 'must be at least 10000, got {VALUE}'],
    max: [99999, 'too big'],
  },
});
const Subscriber = mongoose.model("Subcriber", subscriberSchema)

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

export { Subscriber };

