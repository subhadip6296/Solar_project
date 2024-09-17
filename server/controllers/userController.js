import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Function to create JWT token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" }); // Token will expire in 1 day
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body; // Using 'email' instead of 'login'

  try {
    // Convert email to lowercase for consistency
    const user = await userModel.findOne({ email: email.toLowerCase() });

    // If the user does not exist
    if (!user) {
      return res.json({ success: false, message: "User doesn't exist" });
    }

    // Check if the password matches the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);

    // If the password is incorrect
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    // Generate JWT token for the logged-in user
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error during login" });
  }
};

// register user
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;

  try {
    // Convert email to lowercase for consistency and check if user already exists
    const exists = await userModel.findOne({ email: email.toLowerCase() });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    // Validate email and password strength
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter a valid email" });
    }

    if (!validator.isStrongPassword(password)) {
      return res.json({
        success: false,
        message:
          "Password must be at least 8 characters long, include an uppercase letter, lowercase letter, number, and special character.",
      });
    }

    // Hash the password using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user object
    const newUser = new userModel({
      name: name,
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    // Save the user to the database
    const user = await newUser.save();

    // Generate a JWT token for the newly registered user
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error during registration" });
  }
};

export { loginUser, registerUser };
