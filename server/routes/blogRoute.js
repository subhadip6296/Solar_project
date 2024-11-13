// server/routes/blogRoute.js
import express from "express";
import { createBlog, getBlogs, updateBlog, deleteBlog } from "../controllers/blogController.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("/create", authMiddleware, createBlog);
router.get("/", getBlogs);
router.put("/:id", authMiddleware, updateBlog);
router.delete("/:id", authMiddleware, deleteBlog);

export default router;