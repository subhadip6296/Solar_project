// server/controllers/eventController.js
import Event from "../models/eventModel.js";

export const createEvent = async (req, res) => {
  try {
    const {
      title,
      description,
      date,
      location,
      mainImage,
      galleryImages = []
    } = req.body;

    // Validate required fields first
    if (!title || !description || !date || !location || !mainImage) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
    }

    // Create new event
    const event = new Event({
      title,
      description,
      date,
      location,
      images: {
        main: mainImage,
        gallery: galleryImages || [] // Ensure gallery is an array
      },
      organizer: req.body.userId // Set by auth middleware
    });

    // Validate the model
    await event.validate();

    // Save if validation passes
    await event.save();

    // Populate organizer info
    await event.populate('organizer', 'name');

    res.status(201).json({
      success: true,
      event
    });
  } catch (error) {
    // Handle validation errors
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: Object.values(error.errors).map(err => err.message).join(', ')
      });
    }

    // Handle other errors
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

export const getEvents = async (req, res) => {
  try {
    const { status, past, limit = 10, page = 1 } = req.query;
    let query = {};

    // Filter by status if provided
    if (status) {
      query.status = status;
    }

    // Filter past/upcoming events if specified
    if (past === 'true') {
      query.date = { $lt: new Date() };
    } else if (past === 'false') {
      query.date = { $gte: new Date() };
    }

    // Calculate skip for pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const events = await Event.find(query)
      .populate('organizer', 'name')
      .sort({ date: 1 })
      .skip(skip)
      .limit(parseInt(limit));

    // Get total count for pagination
    const total = await Event.countDocuments(query);

    res.json({
      success: true,
      events,
      pagination: {
        total,
        page: parseInt(page),
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id)
      .populate('organizer', 'name');

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found"
      });
    }

    res.json({
      success: true,
      event
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const {
      title,
      description,
      date,
      location,
      mainImage,
      galleryImages,
      status
    } = req.body;

    // Validate gallery images if provided
    if (galleryImages && galleryImages.length > 4) {
      return res.status(400).json({
        success: false,
        message: "Maximum 4 additional images allowed"
      });
    }

    // Build update object
    const updateData = {
      ...(title && { title }),
      ...(description && { description }),
      ...(date && { date }),
      ...(location && { location }),
      ...(status && { status })
    };

    // Update images if provided
    if (mainImage || galleryImages) {
      updateData.images = {
        ...(mainImage && { main: mainImage }),
        ...(galleryImages && { gallery: galleryImages })
      };
    }

    const event = await Event.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true
      }
    ).populate('organizer', 'name');

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found"
      });
    }

    res.json({
      success: true,
      event
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found"
      });
    }

    res.json({
      success: true,
      message: "Event deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getEventGallery = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found"
      });
    }

    res.json({
      success: true,
      images: {
        main: event.images.main,
        gallery: event.images.gallery
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};