// server/controllers/blogController.js
import Blog from "../models/blogModel.js";

export const createBlog = async (req, res) => {
  try {
    const { title, content, image } = req.body;
    const blog = new Blog({
      title,
      content,
      image,
      author: req.body.userId
    });
    await blog.save();
    res.json({ success: true, blog });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate('author', 'name').sort('-createdAt');
    res.json({ success: true, blogs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ success: true, blog });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
