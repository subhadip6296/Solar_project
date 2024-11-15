import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Calendar,
  Clock,
  ChevronRight,
  BookOpen,
  X,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
} from "lucide-react";
import axios from "axios";
import { format } from "date-fns";
import { StoreContext } from "@/context/StoreContext";
import { useToast } from "@/components/ui/use-toast";

const BlogModal = ({ blog, onClose }) => {
  const { toast } = useToast();

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = blog.title;

    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`;
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        toast({
          title: "Link copied to clipboard!",
          duration: 2000,
        });
        return;
    }
    window.open(shareUrl, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <div className="h-64 md:h-96 overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {format(new Date(blog.createdAt), "MMMM d, yyyy")}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {Math.ceil(blog.content.split(" ").length / 200)} min read
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6">{blog.title}</h2>

          <div className="prose max-w-none mb-8">
            {blog.content.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="border-t pt-6">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-gray-900 mb-3">
                Share this article
              </h4>
              <div className="flex gap-2">
                <button
                  onClick={() => handleShare("facebook")}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                  <Facebook className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare("twitter")}
                  className="p-2 text-sky-500 hover:bg-sky-50 rounded-full transition-colors">
                  <Twitter className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare("linkedin")}
                  className="p-2 text-blue-700 hover:bg-blue-50 rounded-full transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare("copy")}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
                  <LinkIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const { url } = useContext(StoreContext);

  const categories = [
    "All",
    "Solar Energy",
    "Sustainability",
    "Technology",
    "Innovation",
    "Green Living",
  ];

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${url}/api/blogs`);
      if (response.data.success) {
        setBlogs(response.data.blogs);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" ? true : blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get featured blogs (latest 3 blogs)
  const featuredBlogs = [...blogs]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);

  const calculateReadTime = (content) => {
    const wordsPerMinute = 200;
    const words = content.split(" ").length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#009a8d] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6">
              Our Latest Insights & News
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
              Stay updated with the latest trends and innovations in sustainable
              energy
            </motion.p>
          </div>
        </div>
      </div>

      {/* Search and Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#009a8d] focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? "bg-[#009a8d] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}>
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Blogs */}
      {featuredBlogs.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Featured Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBlogs.map((blog) => (
              <motion.div
                onClick={() => setSelectedBlog(blog)}
                key={blog._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group cursor-pointer h-full">
                <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-[450px] hover:shadow-xl transition-shadow duration-300">
                  {/* Image Section */}
                  <div className="relative h-48 flex-shrink-0 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col flex-grow p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#009a8d] transition-colors line-clamp-2">
                      {blog.title}
                    </h3>

                    {/* Meta Info */}
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {format(new Date(blog.createdAt), "MMM d, yyyy")}
                      <span className="mx-2">•</span>
                      <Clock className="w-4 h-4 mr-2" />
                      {calculateReadTime(blog.content)}
                    </div>

                    {/* Content */}
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {blog.content}
                    </p>
                  </div>

                  {/* Footer Section - Always at bottom */}
                  <div className="p-6 pt-0 mt-auto">
                    <div className="pt-4 border-t">
                      <button className="flex items-center text-[#009a8d] font-medium group">
                        Read More
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* All Blogs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-bold mb-6">All Articles</h2>
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#009a8d] mx-auto"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <motion.div
                onClick={() => setSelectedBlog(blog)}
                key={blog._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group cursor-pointer h-full">
                <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-[450px] hover:shadow-xl transition-shadow duration-300">
                  {/* Image Section */}
                  <div className="relative h-48 flex-shrink-0 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col flex-grow p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#009a8d] transition-colors line-clamp-2">
                      {blog.title}
                    </h3>

                    {/* Meta Info */}
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {format(new Date(blog.createdAt), "MMM d, yyyy")}
                      <span className="mx-2">•</span>
                      <Clock className="w-4 h-4 mr-2" />
                      {calculateReadTime(blog.content)}
                    </div>

                    {/* Content */}
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {blog.content}
                    </p>
                  </div>

                  {/* Footer Section - Always at bottom */}
                  <div className="p-6 pt-0 mt-auto">
                    <div className="pt-4 border-t">
                      <button className="flex items-center text-[#009a8d] font-medium group">
                        Read More
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {!loading && filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No blogs found matching your criteria.
            </p>
          </div>
        )}
      </div>

      {/* Blog Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <BlogModal
            blog={selectedBlog}
            onClose={() => setSelectedBlog(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogPage;
