import express from 'express';
import cors from 'cors';
import { ConnectDB } from './config/db.js';
import userRouter from './routes/userRoute.js';
import blogRouter from './routes/blogRoute.js';
import eventRouter from './routes/eventRoute.js';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
ConnectDB();

// Routes
app.use("/api/user", userRouter);
app.use("/api/blogs", blogRouter);
app.use("/api/events", eventRouter);

// Base route
app.get("/", (req, res) => {
  res.send("API Working");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Something broke!" });
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});