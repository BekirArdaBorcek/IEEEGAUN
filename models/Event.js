import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String, // Storing as string for flexibility as per UI "24 Ekim 2024 - 14:00" or similar
      required: true,
    },
    description: {
      type: String,
    },
    location: {
      type: String,
      required: true,
    },
    chapter: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    attendees: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
    },
    status: {
      type: String,
      default: 'Planlanıyor',
      enum: ['Yayında', 'Planlanıyor', 'Tamamlandı', 'İptal Edildi'],
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

// Prevent Mongoose model recompilation error in development
if (process.env.NODE_ENV === 'development') {
  delete mongoose.models.Event;
}

export default mongoose.models.Event || mongoose.model('Event', EventSchema);
