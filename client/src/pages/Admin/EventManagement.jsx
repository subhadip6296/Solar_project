// src/pages/Admin/EventManagement.jsx
import React, { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Edit,
  Trash2,
  Plus,
  Image as ImageIcon,
  X,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { format } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import { eventAPI } from "@/services/api/api";

const ImagePreview = ({ url, onRemove, isMain = false }) => (
  <article className="relative group">
    {/* Changed from div to article */}
    <img
      src={url}
      alt="preview"
      className="w-24 h-24 object-cover rounded-lg border-2 border-gray-200"
      onError={(e) => {
        e.target.src = "https://placehold.co/200x200?text=Invalid+URL";
      }}
    />
    {!isMain && (
      <button
        type="button"
        onClick={onRemove}
        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <X className="w-4 h-4" />
      </button>
    )}
    {isMain && (
      <span className="absolute bottom-0 left-0 right-0 bg-[#009a8d] text-white text-xs py-1 text-center">
        {" "}
        {/* Changed from div to span */}
        Main Image
      </span>
    )}
  </article>
);

const EventPreviewDialog = ({ event, onClose }) => (
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
      </div>

      <div className="flex items-center space-x-3 text-gray-600">
        <MapPin className="h-5 w-5" />
        <div>
          <p className="text-sm font-medium">Location</p>
          <p className="text-sm">{event.location}</p>
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

const EventManagement = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingEvent, setEditingEvent] = useState(null);
  const [previewEvent, setPreviewEvent] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    status: "upcoming",
    images: {
      main: "",
      gallery: [],
    },
  });
  const [newGalleryImage, setNewGalleryImage] = useState("");

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await eventAPI.getAll();
      // Remove the .data since the interceptor already returns the data
      setEvents(response.events || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch events",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      date: "",
      location: "",
      status: "upcoming",
      images: {
        main: "",
        gallery: [],
      },
    });
    setNewGalleryImage("");
    setEditingEvent(null);
  };

  const handleAddGalleryImage = () => {
    if (!newGalleryImage.trim()) {
      toast({
        title: "Error",
        description: "Please enter an image URL",
        variant: "destructive",
      });
      return;
    }

    if (formData.images.gallery.length >= 4) {
      toast({
        title: "Error",
        description: "Maximum 4 gallery images allowed",
        variant: "destructive",
      });
      return;
    }

    setFormData((prev) => ({
      ...prev,
      images: {
        ...prev.images,
        gallery: [...prev.images.gallery, newGalleryImage],
      },
    }));
    setNewGalleryImage("");
  };

  const removeGalleryImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: {
        ...prev.images,
        gallery: prev.images.gallery.filter((_, i) => i !== index),
      },
    }));
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setFormData({
      title: event.title,
      description: event.description,
      date: new Date(event.date).toISOString().slice(0, 16),
      location: event.location,
      status: event.status,
      images: {
        main: event.images.main,
        gallery: event.images.gallery || [],
      },
    });
    setIsDialogOpen(true);
  };

  const validateForm = () => {
    if (!formData.images.main) {
      toast({
        title: "Error",
        description: "Main image is required",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      // Format the data according to the backend's expected structure
      const eventData = {
        title: formData.title,
        description: formData.description,
        date: formData.date,
        location: formData.location,
        images: {
          main: formData.images.main,
          gallery: formData.images.gallery,
        },
        status: formData.status,
      };

      if (editingEvent) {
        await eventAPI.update(editingEvent.id, eventData);
        toast({
          title: "Success",
          description: "Event updated successfully",
        });
      } else {
        await eventAPI.create(eventData);
        toast({
          title: "Success",
          description: "Event created successfully",
        });
      }

      fetchEvents();
      setIsDialogOpen(false);
      resetForm();
    } catch (error) {
      console.error("API Error:", error.response?.data); // Add this for debugging
      toast({
        title: "Error",
        description:
          error.response?.data?.message ||
          `Failed to ${editingEvent ? "update" : "create"} event`,
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;

    try {
      await eventAPI.delete(id);
      // Update local state immediately
      setEvents((prev) => prev.filter((event) => event.id !== id));
      toast({
        title: "Success",
        description: "Event deleted successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to delete event",
        variant: "destructive",
      });
    }
  };

  const handleStatusChange = (status) => {
    setFormData((prev) => ({ ...prev, status }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Event Management</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="mr-2 h-4 w-4" /> Add New Event
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <form onSubmit={handleSubmit}>
              <DialogHeader>
                <DialogTitle>
                  {editingEvent ? "Edit Event" : "Create New Event"}
                </DialogTitle>
                <DialogDescription>
                  Fill in the event details below.
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-4 py-4">
                {/* Main Image */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="mainImage" className="text-right">
                    Main Image URL*
                  </Label>
                  <div className="col-span-3 space-y-2">
                    <Input
                      id="mainImage"
                      value={formData.images.main}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          images: { ...prev.images, main: e.target.value },
                        }))
                      }
                      placeholder="Enter main image URL"
                      required
                    />
                    {formData.images.main && (
                      <ImagePreview url={formData.images.main} isMain />
                    )}
                  </div>
                </div>

                {/* Gallery Images */}
                <div className="grid grid-cols-4 items-start gap-4">
                  <Label className="text-right">Gallery Images</Label>
                  <div className="col-span-3 space-y-2">
                    <div className="flex gap-2">
                      <Input
                        value={newGalleryImage}
                        onChange={(e) => setNewGalleryImage(e.target.value)}
                        placeholder="Enter gallery image URL"
                      />
                      <Button
                        type="button"
                        onClick={handleAddGalleryImage}
                        disabled={formData.images.gallery.length >= 4}>
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {formData.images.gallery.map((url, index) => (
                        <ImagePreview
                          key={index}
                          url={url}
                          onRemove={() => removeGalleryImage(index)}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">
                      {4 - formData.images.gallery.length} slots remaining
                    </p>
                  </div>
                </div>

                {/* Basic Details */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right">
                    Title
                  </Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="col-span-3"
                    required
                  />
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="date" className="text-right">
                    Date & Time
                  </Label>
                  <Input
                    id="date"
                    type="datetime-local"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="col-span-3"
                    required
                  />
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="location" className="text-right">
                    Location
                  </Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className="col-span-3"
                    required
                  />
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="status" className="text-right">
                    Status
                  </Label>
                  <Select
                    value={formData.status}
                    onValueChange={handleStatusChange}>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="upcoming">Upcoming</SelectItem>
                      <SelectItem value="ongoing">Ongoing</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="col-span-3 min-h-[100px]"
                    required
                  />
                </div>
              </div>

              <DialogFooter>
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      <motion.div
                        className="animate-spin mr-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}>
                        ⚪
                      </motion.div>
                      {editingEvent ? "Updating..." : "Creating..."}
                    </>
                  ) : (
                    <>{editingEvent ? "Update Event" : "Create Event"}</>
                  )}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Event Preview Dialog */}
      <Dialog open={!!previewEvent} onOpenChange={() => setPreviewEvent(null)}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>Event Preview</DialogTitle>
          </DialogHeader>
          {previewEvent && <EventPreviewDialog event={previewEvent} />}
        </DialogContent>
      </Dialog>

      {/* Events Grid */}
      {loading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 border-2 border-[#009a8d] border-t-transparent rounded-full"
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {events.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="h-full">
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="flex-shrink-0">
                    <div className="relative h-48 rounded-t-lg overflow-hidden">
                      <img
                        src={event.images.main}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                      {event.images.gallery?.length > 0 && (
                        <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                          +{event.images.gallery.length} photos
                        </div>
                      )}
                      <div className="absolute bottom-2 left-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            event.status === "upcoming"
                              ? "bg-green-500 text-white"
                              : event.status === "ongoing"
                              ? "bg-blue-500 text-white"
                              : "bg-gray-500 text-white"
                          }`}>
                          {event.status.charAt(0).toUpperCase() +
                            event.status.slice(1)}
                        </span>
                      </div>
                    </div>
                    <div className="pt-4">
                      <CardTitle className="line-clamp-1">
                        {event.title}
                      </CardTitle>
                      <CardDescription>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{format(new Date(event.date), "PPp")}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {event.description}
                    </p>
                  </CardContent>

                  <CardFooter className="flex justify-end gap-2 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPreviewEvent(event)}>
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(event)}>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(event.id)}>
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {!loading && events.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <ImageIcon className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <p className="text-gray-500 text-lg">
            No events found. Create your first event!
          </p>
        </div>
      )}
    </div>
  );
};

export default EventManagement;
