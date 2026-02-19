const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('Please define the MONGODB_URI environment variable inside .env.local');
  process.exit(1);
}

// Define specific schema for this script to ensure we can write to it
const EventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
  },
  { strict: false } 
);

const Event = mongoose.models.Event || mongoose.model('Event', EventSchema);

async function setFeaturedEvent() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Find the most recent event
    const event = await Event.findOne().sort({ createdAt: -1 });
    
    if (event) {
      console.log(`Found event: ${event.title}`);
      event.isFeatured = true;
      await event.save();
      console.log('Successfully updated event to be featured.');
      
      // Verify
      const check = await Event.findById(event._id);
      console.log(`Verification: isFeatured = ${check.isFeatured}`);
    } else {
      console.log('No events found to update.');
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
  }
}

setFeaturedEvent();
