import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
const handler = NextAuth({
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Your email",
          required: true,
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
          required: true,
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!credentials) return null;
        const bd = await connectDB();
        const userCollection = bd.collection("users");
        const user = await userCollection.findOne({ email });
        console.log(user);
        if (user) {
          if (user.password === password) {
            return user;
          }
        }
        return null;
      },
    }),
  ],
  //   pages: {
  //     signIn: "api/auth/signin",
  //   },
});

export { handler as POST, handler as GET };
