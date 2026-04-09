import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import bcrypt from 'bcryptjs';
import dbConnect from './lib/mongodb';
import User from './models/User';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        if (credentials === null) return null;

        try {
          await dbConnect();
          const user = await User.findOne({ email: credentials.email });

          if (user) {
            const isMatch = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isMatch) {
              // Temporary: Restrict to Admins only
              if (user.role !== 'Yönetici') {
                 throw new Error('Sadece yöneticiler giriş yapabilir.');
              }
              return {
                _id: user._id.toString(),
                name: user.name,
                email: user.email,
                role: user.role,
                username: user.username,
                image: user.image
              };
            } else {
              throw new Error('Email or Password is not correct');
            }
          } else {
            throw new Error('User not found');
          }
        } catch (error) {
          // Re-throw as a normalized Error so Auth.js can classify the failure correctly.
          if (error instanceof Error) throw error;
          throw new Error('Giris islemi sirasinda beklenmeyen bir hata olustu.');
        }
      },
    }),
  ],
});
