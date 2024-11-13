// src/components/admin/BlogManagement.jsx
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import axios from "axios";
import { useForm } from "react-hook-form";

const BlogManagement = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const { toast } = useToast();

  const form = useForm({
    defaultValues: {
      title: "",
      content: "",
      category: "solar",
      status: "draft",
      image: "",
      tags: "",
    },
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/admin/blogs`,
        {
          headers: { token },
        }
      );
      setBlogs(response.data.blogs);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch blogs",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem("token");
      const url = `${import.meta.env.VITE_API_URL}/api/admin/blogs${
        editingBlog ? `/${editingBlog._id}` : ""
      }`;
      const method = editingBlog ? "put" : "post";

      await axios[method](url, data, {
        headers: { token },
      });

      toast({
        title: "Success",
        description: `Blog ${editingBlog ? "updated" : "created"} successfully`,
      });

      setIsDialogOpen(false);
      form.reset();
      setEditingBlog(null);
      fetchBlogs();
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to ${editingBlog ? "update" : "create"} blog`,
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/admin/blogs/${id}`,
        {
          headers: { token },
        }
      );

      toast({
        title: "Success",
        description: "Blog deleted successfully",
      });

      fetchBlogs();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete blog",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Blog Management</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add New Blog
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>
                {editingBlog ? "Edit Blog" : "Create New Blog"}
              </DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Blog title" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Content</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Blog content"
                          className="h-32"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Add other form fields here */}
                <div className="flex justify-end space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingBlog ? "Update" : "Create"}
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-white rounded-lg shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-10">
                  Loading...
                </TableCell>
              </TableRow>
            ) : blogs.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-10">
                  No blogs found
                </TableCell>
              </TableRow>
            ) : (
              blogs.map((blog) => (
                <TableRow key={blog._id}>
                  <TableCell className="font-medium">{blog.title}</TableCell>
                  <TableCell>{blog.category}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        blog.status === "published"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                      {blog.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          form.reset(blog);
                          setEditingBlog(blog);
                          setIsDialogOpen(true);
                        }}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(blog._id)}>
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                          window.open(`/blog/${blog._id}`, "_blank")
                        }>
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BlogManagement;
