// server/routes/eventRoute.js
import express from "express";
import { createEvent, getEvents, updateEvent, deleteEvent } from "../controllers/eventController.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("/create", authMiddleware, createEvent);
router.get("/", getEvents);
router.put("/:id", authMiddleware, updateEvent);
router.delete("/:id", authMiddleware, deleteEvent);

export default router;