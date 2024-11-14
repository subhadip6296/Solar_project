// server/models/eventModel.js
import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  date: {
    type: Date,
    required: [true, 'Date is required']
  },
  location: {
    type: String,
    required: [true, 'Location is required']
  },
  images: {
    main: {
      type: String,
      required: [true, 'Main image is required']
    },
    gallery: {
      type: [String],
      validate: {
        validator: function (gallery) {
          return gallery.length <= 4;
        },
        message: 'Gallery can have maximum 4 additional images'
      },
      default: []
    }
  },
  status: {
    type: String,
    enum: ['upcoming', 'ongoing', 'completed'],
    default: 'upcoming'
  },
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Pre-save middleware to validate gallery images
eventSchema.pre('save', function (next) {
  // Validate gallery length
  if (this.images.gallery && this.images.gallery.length > 4) {
    next(new Error('Maximum 4 additional images allowed in gallery'));
  }

  // Auto-set status based on date
  const now = new Date();
  const eventDate = new Date(this.date);

  if (eventDate < now) {
    this.status = 'completed';
  } else if (eventDate.toDateString() === now.toDateString()) {
    this.status = 'ongoing';
  } else {
    this.status = 'upcoming';
  }

  next();
});

// Virtual for all images combined
eventSchema.virtual('allImages').get(function () {
  return [this.images.main, ...this.images.gallery];
});

// Method to check if event is past
eventSchema.methods.isPast = function () {
  return new Date(this.date) < new Date();
};

// Format the response when converting to JSON
eventSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  }
});

export default mongoose.model("Event", eventSchema);
