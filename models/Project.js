import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Lütfen proje adını giriniz.'],
      maxlength: 100,
    },
    description: {
      type: String,
      maxlength: 500,
    },
    chapter: {
      type: String, // Storing Chapter Name or ID. Ideally ID ref, but string for simplicity consistent with other models here
      required: true,
    },
    status: {
      type: String,
      default: 'Planlama',
      enum: ['Planlama', 'Devam Ediyor', 'Tamamlandı', 'İptal'],
    },
    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    isAdmiral: {
      type: Boolean,
      default: false,
    },
    teamSize: {
      type: Number,
      default: 1,
    },
    startDate: {
      type: Date,
      default: Date.now,
    },
    endDate: {
      type: Date,
    },
  },
  { timestamps: true },
);

export default mongoose.models.Project ||
  mongoose.model('Project', ProjectSchema);
