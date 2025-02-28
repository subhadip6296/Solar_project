import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Clock, Search, Eye } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { eventAPI } from "@/services/api/api";

const EventCard = ({ event, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
      onClick={onClick}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.images.main}
          alt={event.title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">
              {format(new Date(event.date), "MMM dd, yyyy")}
            </span>
          </div>
        </div>
        <div className="absolute top-2 right-2">
          <span
            className={`px-2 py-1 rounded-full text-xs ${
              event.status === "upcoming"
                ? "bg-green-500 text-white"
                : event.status === "ongoing"
                ? "bg-blue-500 text-white"
                : "bg-gray-500 text-white"
            }`}>
            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-[#118B50] transition-colors">
          {event.title}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm">
              {format(new Date(event.date), "h:mm a")}
            </span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{event.location}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {event.description}
        </p>

        <div className="flex justify-end">
          <Button
            variant="ghost"
            className="text-[#118B50] hover:text-[#008075] group">
            View Details
            <Eye className="w-4 h-4 ml-2 group-hover:animate-pulse" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const EventDetailDialog = ({ event, onClose }) => {
  return (
    <div className="max-w-2xl h-[85vh] overflow-scroll">
      <div className="relative h-64 overflow-hidden rounded-t-lg">
        <img
          src={event.images.main}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        {event.images.gallery?.length > 0 && (
          <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
            +{event.images.gallery.length} photos
          </div>
        )}
      </div>

      <div className="p-6 space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
          <div className="flex items-center gap-2 text-gray-500">
            <span
              className={`px-2 py-1 rounded-full text-sm ${
                event.status === "upcoming"
                  ? "bg-green-100 text-green-700"
                  : event.status === "ongoing"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-gray-100 text-gray-700"
              }`}>
              {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-3 text-gray-600">
            <Calendar className="h-5 w-5" />
            <div>
              <p className="text-sm font-medium">Date</p>
              <p className="text-sm">{format(new Date(event.date), "PPP")}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-gray-600">
            <Clock className="h-5 w-5" />
            <div>
              <p className="text-sm font-medium">Time</p>
              <p className="text-sm">{format(new Date(event.date), "p")}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-gray-600 col-span-2">
            <MapPin className="h-5 w-5" />
            <div>
              <p className="text-sm font-medium">Location</p>
              <p className="text-sm">{event.location}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Description</h3>
          <p className="text-gray-600 text-sm whitespace-pre-line">
            {event.description}
          </p>
        </div>

        {event.images.gallery?.length > 0 && (
          <div>
            <h3 className="font-medium mb-2">Gallery</h3>
            <div className="grid grid-cols-4 gap-2">
              {event.images.gallery.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-20 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filter, setFilter] = useState("all"); // all, upcoming, past
  const { toast } = useToast();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await eventAPI.getAll();
      setEvents(response.events || []);
    } catch (error) {
      console.error("Error fetching events:", error);
      toast({
        title: "Error",
        description: "Failed to load events. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());

    const isPast = eventAPI.isEventPast(event.date);

    switch (filter) {
      case "upcoming":
        return matchesSearch && event.status === "upcoming";
      case "past":
        return matchesSearch && isPast;
      default:
        return matchesSearch;
    }
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#118B50]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#C1D8C3] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl text-black md:text-5xl font-bold mb-6">
              Events & Workshops
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-black max-w-2xl mx-auto">
              Stay updated with our latest events, workshops, and community
              gatherings focused on sustainable energy solutions.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}>
                All Events
              </Button>
              <Button
                variant={filter === "upcoming" ? "default" : "outline"}
                onClick={() => setFilter("upcoming")}>
                Upcoming
              </Button>
              <Button
                variant={filter === "past" ? "default" : "outline"}
                onClick={() => setFilter("past")}>
                Past Events
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">No events</div>

      {/* Events Grid */}
      {/* <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredEvents.map((event) => (
              <EventCard
                key={event._id}
                event={event}
                onClick={() => setSelectedEvent(event)}
              />
            ))}
          </AnimatePresence>
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No events found matching your criteria.
            </p>
          </div>
        )}
      </div> */}

      {/* Event Detail Dialog */}
      <Dialog
        open={!!selectedEvent}
        onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>Event Details</DialogTitle>
          </DialogHeader>
          {selectedEvent && (
            <EventDetailDialog
              event={selectedEvent}
              onClose={() => setSelectedEvent(null)}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EventsPage;
