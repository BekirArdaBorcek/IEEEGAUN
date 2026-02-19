import mongoose from 'mongoose';

const ChapterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Lütfen bir chapter adı giriniz.'],
      unique: true,
      maxlength: 100,
    },
    shortName: {
      type: String,
      maxlength: 20,
    },
    description: {
      type: String,
      maxlength: 500,
    },
    logo: {
      type: String,
      default: 'https://placehold.co/400x400?text=Chapter',
    },
    banner: {
      type: String,
      default: 'https://placehold.co/1200x400?text=Banner',
    },
    president: {
      type: String, // Could be a reference to User, but keeping simple for now
      default: 'Atanmadı',
    },
    memberCount: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: 'Aktif',
      enum: ['Aktif', 'Pasif', 'Askıda'],
    },
    color: {
      type: String,
      default: '#3b82f6', // blue-500 default
    },
  },
  { timestamps: true },
);

export default mongoose.models.Chapter ||
  mongoose.model('Chapter', ChapterSchema);
