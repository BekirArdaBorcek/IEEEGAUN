import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name for this user.'],
      maxlength: 60,
    },
    username: {
      type: String,
      required: [true, 'Please provide a username.'],
      unique: true,
      maxlength: 30,
    },
    email: {
      type: String,
      required: [true, 'Please provide an email.'],
      unique: true,
    },
    role: {
      type: String,
      default: 'Öğrenci',
      enum: ['Öğrenci', 'Topluluk Başkanı', 'Yönetici'],
    },
    department: {
      type: String,
      default: 'Bilinmiyor',
    },
    chapter: {
      type: String,
      default: 'Computer Society',
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
      // In a real application, select: false would be used to hide it by default
    },
    image: {
      type: String,
      default:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDc1foDH1oFwPCW4CVwiruf_y3nktHtrOU6WWQJT9WeJW7XuCkWZp3JBQC19HaKIzqoV10CvxsZO3O19UeUgfOA4jltWk-TbPPGqw6joOMix5uzAN4_ezuQPQB_HmnpnLxj0jYyRvPR8cQ8tv0ZHnGDILyxC5mKj0gGDj2jCm9YUbOtOr6IdYybRbPWuIQh3ANwH4r4eEebyNv_hhGBL2by8OjAhsQrPbz-Woxv-8gN3p-GFg3f5p_iT__kkgzqd6Dsdz5ZZuoyFPI', // Default avatar
    },
    status: {
      type: String,
      default: 'Aktif',
      enum: ['Aktif', 'Pasif', 'Yasaklı', 'Beklemede'],
    },
    lastActive: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

export default mongoose.models.User || mongoose.model('User', UserSchema);
