// client/src/pages/Admin/EventManagement.jsx

import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { StoreContext } from "@/context/StoreContext";
import axios from "axios";
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
import { Calendar, MapPin, Clock, Edit, Trash2, Plus } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const EventManagement = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingEvent, setEditingEvent] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    image: "",
  });

  const { url } = useContext(StoreContext);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${url}/api/events`);
      if (response.data.success) {
        setEvents(response.data.events);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch events. Please try again.",
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
      image: "",
    });
    setEditingEvent(null);
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setFormData({
      title: event.title,
      description: event.description,
      date: new Date(event.date).toISOString().slice(0, 16),
      location: event.location,
      image: event.image,
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = editingEvent
        ? `${url}/api/events/${editingEvent._id}`
        : `${url}/api/events/create`;
      const method = editingEvent ? "put" : "post";

      const response = await axios({
        method,
        url: endpoint,
        data: formData,
        headers: { token },
      });

      if (response.data.success) {
        toast({
          title: "Success",
          description: `Event ${
            editingEvent ? "updated" : "created"
          } successfully!`,
        });
        fetchEvents();
        setIsDialogOpen(false);
        resetForm();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to ${
          editingEvent ? "update" : "create"
        } event. Please try again.`,
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        const response = await axios.delete(`${url}/api/events/${id}`, {
          headers: { token },
        });
        if (response.data.success) {
          toast({
            title: "Success",
            description: "Event deleted successfully!",
          });
          fetchEvents();
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to delete event. Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pcolor"></div>
      </div>
    );
  }

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
                  Fill in the details for the event. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
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
                  />
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
                    className="col-span-3"
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
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="image" className="text-right">
                    Image URL
                  </Label>
                  <Input
                    id="image"
                    value={formData.image}
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.value })
                    }
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">
                  {editingEvent ? "Save Changes" : "Create Event"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <Card key={event._id}>
            <CardHeader>
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(event.date)}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                {event.description.length > 150
                  ? `${event.description.substring(0, 150)}...`
                  : event.description}
              </p>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleEdit(event)}>
                <Edit className="h-4 w-4 mr-2" /> Edit
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDelete(event._id)}>
                <Trash2 className="h-4 w-4 mr-2" /> Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {events.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          No events found. Create your first event!
        </div>
      )}
    </div>
  );
};

export default EventManagement;
