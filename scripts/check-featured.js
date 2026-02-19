const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('Please define the MONGODB_URI environment variable inside .env.local');
  process.exit(1);
}

const EventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
    status: { type: String },
  },
  { strict: false } // We only care about these fields
);

const Event = mongoose.models.Event || mongoose.model('Event', EventSchema);

async function checkFeaturedEvents() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const events = await Event.find({});
    console.log(`Total events found: ${events.length}`);

    const featured = events.filter(e => e.isFeatured === true);
    console.log(`Featured events found: ${featured.length}`);

    if (featured.length > 0) {
      console.log('Featured Events:');
      featured.forEach(e => {
        console.log(`- ${e.title} (Status: ${e.status}, isFeatured: ${e.isFeatured})`);
      });
    } else {
      console.log('No featured events found.');
    }
    
    // Check if any event has isFeatured field at all
    const withField = events.filter(e => e.isFeatured !== undefined);
    console.log(`Events with isFeatured field present: ${withField.length}`);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
  }
}

checkFeaturedEvents();
