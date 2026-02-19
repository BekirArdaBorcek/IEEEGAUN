import mongoose from 'mongoose';

const ReportSchema = new mongoose.Schema(
  {
    type: {
      type: String, // 'Yorum', 'Konu'
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    reportedBy: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: 'Beklemede',
      enum: ['Beklemede', 'İncelendi', 'Kaldırıldı', 'Onaylandı'],
    },
  },
  { timestamps: true },
);

export default mongoose.models.Report || mongoose.model('Report', ReportSchema);
