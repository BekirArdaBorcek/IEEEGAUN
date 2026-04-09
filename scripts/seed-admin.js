const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: '.env.local' });

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
      maxlength: 60,
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

const User = mongoose.models.User || mongoose.model('User', UserSchema);

async function seedAdmin() {
  try {
    const MONGODB_URI = "mongodb+srv://fabron:6563001109aA@ieeegaun.zkoddae.mongodb.net/?appName=ieeegaun";

    if (!MONGODB_URI) {
      throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
      );
    }

    await mongoose.connect(MONGODB_URI);

    const adminEmail = 'admin@ieeegaun.com';
    const existingAdmin = await User.findOne({ email: adminEmail });

    if (existingAdmin) {
      console.log('Admin user already exists.');
      
      // Update role if not Yönetici
      if (existingAdmin.role !== 'Yönetici') {
          existingAdmin.role = 'Yönetici';
          await existingAdmin.save();
          console.log('Updated existing user to Yönetici role.');
      }
      
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash('admin123', 10);

    const newAdmin = new User({
      name: 'Admin User',
      username: 'admin',
      email: adminEmail,
      password: hashedPassword,
      role: 'Yönetici',
      department: 'Yönetim',
      chapter: 'Yönetim',
    });

    await newAdmin.save();
    console.log('Admin user created successfully.');
    console.log('Email: admin@ieeegaun.com');
    console.log('Password: admin123');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding admin user:', error);
    process.exit(1);
  }
}

seedAdmin();
