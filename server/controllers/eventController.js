// server/controllers/eventController.js
import Event from "../models/eventModel.js";

export const createEvent = async (req, res) => {
  try {
    const { title, description, date, location, image } = req.body;
    const event = new Event({
      title,
      description,
      date,
      location,
      image,
      organizer: req.body.userId
    });
    await event.save();
    res.json({ success: true, event });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('organizer', 'name').sort('date');
    res.json({ success: true, events });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ success: true, event });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Event deleted successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};