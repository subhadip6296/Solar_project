import mongoose from "mongoose";

// Define the schema for the user model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure emails are unique
  },
  password: {
    type: String,
    required: true,
  },
});

// Create and export the user model based on the schema
const userModel = mongoose.model("User", userSchema);
export default userModel;
