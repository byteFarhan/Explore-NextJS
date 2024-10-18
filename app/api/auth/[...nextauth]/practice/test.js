import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Email",
          type: "text",
          required: true,
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          required: true,
          placeholder: "Your password",
        },
      },
      //   async authorize(credentials) {},
      async authorize({ email, password }) {
        if (!email) return null;
        console.log(email, password);
        return true;
      },
    }),
  ],
  // pages: {
  //     signIn: '/auth/signin'
  // },
});

export { handler as GET, handler as POST };
