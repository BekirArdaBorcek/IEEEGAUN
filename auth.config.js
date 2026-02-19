export const authConfig = {
  pages: {
    signIn: '/login',
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.username = user.username;
        token.id = user._id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role;
        session.user.username = token.username;
        session.user.id = token.id;
      }
      return session;
    },
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      const isOnAdmin = nextUrl.pathname.startsWith('/admin');
      const isOnForum = nextUrl.pathname.startsWith('/forum');

      if (isOnAdmin || isOnForum) {
        if (isLoggedIn && auth?.user?.role === 'Yönetici') return true;
        return false; // Redirect unauthenticated or non-admin users
      }

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        // Redirect initialized users to dashboard if they are on login page
         if (nextUrl.pathname.startsWith('/login')) {
             if (auth?.user?.role === 'Yönetici') {
                 return Response.redirect(new URL('/admin', nextUrl));
             }
             // If logged in but not admin (or role undefined), stay on login page to allow re-login
         }
      }
      return true;
    },
  },
};
