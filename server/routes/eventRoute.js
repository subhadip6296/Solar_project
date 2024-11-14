import express from "express";
import {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  getEventGallery
} from "../controllers/eventController.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

// Public routes
router.get("/", getEvents);  // Get all events with filters
router.get("/:id", getEventById);  // Get single event
router.get("/gallery/:id", getEventGallery);  // Get event gallery

// Protected routes (require authentication)
router.use(authMiddleware);  // Apply auth middleware to all routes below
router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

export default router;