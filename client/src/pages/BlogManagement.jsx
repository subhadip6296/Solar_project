import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { StoreContext } from "@/context/StoreContext";
import {
  Loader2,
  PlusCircle,
  Trash2,
  Edit2,
  X,
  ImageIcon,
  LayoutDashboard,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const BlogForm = ({
  formData,
  setFormData,
  handleSubmit,
  isEditing,
  submitting,
  onCancel,
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Blog Title</label>
        <Input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Enter blog title"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Blog Content
        </label>
        <Textarea
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
          placeholder="Write your blog content here..."
          className="min-h-[200px]"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Image URL</label>
        <Input
          type="text"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          placeholder="Enter image URL"
          required
        />
      </div>

      <div className="flex justify-end gap-3">
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button
          type="submit"
          disabled={submitting}
          className="bg-[#009a8d] hover:bg-[#008075]">
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              {isEditing ? "Updating..." : "Creating..."}
            </>
          ) : (
            <>{isEditing ? "Update Blog" : "Create Blog"}</>
          )}
        </Button>
      </div>
    </form>
  );
};

const BlogManagement = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
  });

  const { url } = useContext(StoreContext);
  const token = localStorage.getItem("token");
  const { toast } = useToast();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${url}/api/blogs`);
      if (response.data.success) {
        setBlogs(response.data.blogs || []);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch blogs",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      content: blog.content,
      image: blog.image,
    });
    setIsEditing(true);
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.title.trim() ||
      !formData.content.trim() ||
      !formData.image.trim()
    ) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill all fields",
      });
      return;
    }

    try {
      setSubmitting(true);
      if (isEditing) {
        const response = await axios.put(
          `${url}/api/blogs/${editingBlog._id}`,
          formData,
          { headers: { token } }
        );
        if (response.data.success) {
          toast({
            title: "Success",
            description: "Blog updated successfully",
          });
        }
      } else {
        const response = await axios.post(`${url}/api/blogs/create`, formData, {
          headers: { token },
        });
        if (response.data.success) {
          toast({
            title: "Success",
            description: "Blog created successfully",
          });
        }
      }
      resetForm();
      fetchBlogs();
    } catch (error) {
      console.error("Error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description:
          error.message || `Failed to ${isEditing ? "update" : "create"} blog`,
      });
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ title: "", content: "", image: "" });
    setIsEditing(false);
    setEditingBlog(null);
    setShowForm(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) {
      return;
    }

    try {
      const response = await axios.delete(`${url}/api/blogs/${id}`, {
        headers: { token },
      });

      if (response.data.success) {
        toast({
          title: "Success",
          description: "Blog deleted successfully",
        });
        fetchBlogs();
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to delete blog",
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">

      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
          <p className="text-gray-500 mt-1">
            Create and manage your blog posts
          </p>
        </div>
        <Button
          onClick={() => setShowForm(true)}
          className="bg-[#009a8d] hover:bg-[#008075]">
          <PlusCircle className="w-4 h-4 mr-2" />
          New Blog
        </Button>
      </div>

      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>
              {isEditing ? "Edit Blog" : "Create New Blog"}
            </DialogTitle>
            <DialogDescription>
              {isEditing
                ? "Make changes to your blog post here"
                : "Add a new blog post to your website"}
            </DialogDescription>
          </DialogHeader>
          <BlogForm
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            isEditing={isEditing}
            submitting={submitting}
            onCancel={resetForm}
          />
        </DialogContent>
      </Dialog>

      {/* Blog List */}
      <div className="space-y-6">
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-[#009a8d]" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {blogs.map((blog) => (
                <motion.div
                  key={blog._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="group h-full">
                  <Card className="flex flex-col h-[400px] overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 flex-shrink-0 overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          size="icon"
                          variant="secondary"
                          onClick={() => handleEdit(blog)}
                          className="h-8 w-8 bg-white hover:bg-gray-100">
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="destructive"
                          onClick={() => handleDelete(blog._id)}
                          className="h-8 w-8">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <CardContent className="flex-grow p-4 overflow-hidden">
                      <h3 className="font-bold text-xl mb-2 group-hover:text-[#009a8d] transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-4">
                        {blog.content}
                      </p>
                    </CardContent>

                    <CardFooter className="mt-auto px-4 py-3 bg-gray-50 border-t">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-sm text-gray-500">
                          {format(new Date(blog.createdAt), "MMM d, yyyy")}
                        </span>
                        <span className="text-sm text-gray-500">
                          {Math.ceil(blog.content.split(" ").length / 200)} min
                          read
                        </span>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {!loading && blogs.length === 0 && (
          <div className="text-center py-12">
            <ImageIcon className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500 text-lg">
              No blogs found. Create your first blog post!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogManagement;
