import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FileText,
  Calendar,
  TrendingUp,
  Eye,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { blogAPI, eventAPI } from "@/services/api/api";

// Stats Card Component
const StatsCard = ({ title, value, icon: Icon, trend, isLoading, onClick }) => (
  <Card
    className="cursor-pointer hover:shadow-md transition-all"
    onClick={onClick}>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">
        {title}
      </CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      {isLoading ? (
        <Skeleton className="h-7 w-20" />
      ) : (
        <>
          <div className="text-2xl font-bold">{value}</div>
          {trend && (
            <p
              className={`text-xs flex items-center mt-1 ${
                trend > 0 ? "text-green-500" : "text-red-500"
              }`}>
              {trend > 0 ? (
                <ArrowUpRight className="h-3 w-3" />
              ) : (
                <ArrowDownRight className="h-3 w-3" />
              )}
              {Math.abs(trend)}% from last month
            </p>
          )}
        </>
      )}
    </CardContent>
  </Card>
);

const DashboardPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalBlogs: 0,
    totalEvents: 0,
    recentBlogs: [],
    recentEvents: [],
    monthlyStats: [],
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const [blogsResponse, eventsResponse] = await Promise.all([
        blogAPI.getAll(),
        eventAPI.getAll(),
      ]);

      // Process blogs data
      const blogs = blogsResponse.data.blogs || [];
      const events = eventsResponse.data.events || [];

      // Create monthly stats (example data - modify according to your needs)
      const monthlyStats = [
        { name: "Jan", blogs: 4, events: 2 },
        { name: "Feb", blogs: 6, events: 3 },
        { name: "Mar", blogs: 8, events: 5 },
        { name: "Apr", blogs: 5, events: 4 },
        { name: "May", blogs: 7, events: 6 },
        { name: "Jun", blogs: 9, events: 4 },
      ];

      setStats({
        totalBlogs: blogs.length,
        totalEvents: events.length,
        recentBlogs: blogs.slice(0, 5),
        recentEvents: events.slice(0, 5),
        monthlyStats,
      });
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Title */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Overview of your content management system
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Blogs"
          value={stats.totalBlogs}
          icon={FileText}
          trend={12}
          isLoading={loading}
          onClick={() => navigate("/admin/blogs")}
        />
        <StatsCard
          title="Total Events"
          value={stats.totalEvents}
          icon={Calendar}
          trend={-5}
          isLoading={loading}
          onClick={() => navigate("/admin/events")}
        />
        <StatsCard
          title="Total Views"
          value="2,345"
          icon={Eye}
          trend={8}
          isLoading={loading}
        />
        <StatsCard
          title="Engagement Rate"
          value="64%"
          icon={TrendingUp}
          trend={15}
          isLoading={loading}
        />
      </div>

      {/* Chart Section */}
      {/* <Card>
        <CardHeader>
          <CardTitle>Content Overview</CardTitle>
          <CardDescription>
            Number of blogs and events published per month
          </CardDescription>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={stats.monthlyStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="blogs" fill="#009a8d" name="Blogs" />
              <Bar dataKey="events" fill="#93c5fd" name="Events" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card> */}

      {/* Recent Activity */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Recent Blogs */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Blogs</CardTitle>
              <CardDescription>Latest blog posts</CardDescription>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/admin/blogs")}>
              <Plus className="h-4 w-4 mr-1" />
              Add New
            </Button>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-2">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="h-12" />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {stats.recentBlogs.map((blog) => (
                  <motion.div
                    key={blog._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between border-b pb-2">
                    <div>
                      <p className="font-medium line-clamp-1">{blog.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigate(`/admin/blogs/edit/${blog._id}`)}>
                      Edit
                    </Button>
                  </motion.div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Events */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Events</CardTitle>
              <CardDescription>Latest events</CardDescription>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/admin/events")}>
              <Plus className="h-4 w-4 mr-1" />
              Add New
            </Button>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-2">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="h-12" />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {stats.recentEvents.map((event) => (
                  <motion.div
                    key={event._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between border-b pb-2">
                    <div>
                      <p className="font-medium line-clamp-1">{event.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(event.date).toLocaleDateString()}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        navigate(`/admin/events/edit/${event._id}`)
                      }>
                      Edit
                    </Button>
                  </motion.div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
