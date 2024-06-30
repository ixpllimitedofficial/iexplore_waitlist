import NextAuth, { User, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const BASE_PATH = "/api/auth";

const authOptions: NextAuthConfig = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {

        const res = await fetch("http://44.193.73.68:8000/api/auth/login/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            username_or_email: credentials.username,
            password: credentials.password,
          }),
        });
        const user = await res.json();

        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.data.user.id;
        token.name = user.data.user.first_name;
        token.email = user.data.user.email;
        token.accessToken = user.data.token.accessToken;
        // Add any other user fields here
      }
      return token;
    },
    async session({ session, token }: any) {
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.accessToken = token.accessToken;
      // Add any other user fields here
      return session;
    }
  },
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    // signIn: '/auth/signIn',  // Custom sign-in page
    // signOut: '/auth/signout',  // Custom sign-out page
    // error: '/auth/error',  // Custom error page
    // verifyRequest: '/auth/verify-request',  // Custom verify request page
    // newUser: '/auth/new-user'  // Custom new user page
  }
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
