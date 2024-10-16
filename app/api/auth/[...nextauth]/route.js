import NextAuth from "next-auth/next";
// import Credentials from "next-auth/providers/credentials";
import CredentialsProvider from "next-auth/providers/credentials";

// console.log(process.env.NEXT_PUBLIC_AUTH_SECRET);
export const authOptions = {
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          required: true,
          placeholder: "Your email",
        },
        password: {
          label: "Password",
          type: "password",
          required: true,
          placeholder: "Enter Password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!credentials) {
          return null;
        }
        // return { user: { email, password } };
        const currentUser = users.find((user) => user.email === email);
        // console.log(currentUser);
        if (currentUser) {
          if (currentUser.password === password) {
            return currentUser;
          }
        }
        return null;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

const users = [
  {
    id: 1,
    name: "Mehedi",
    email: "m@gmail.com",
    password: "password",
  },
  {
    id: 2,
    name: "Zihad",
    email: "z@gmail.com",
    password: "password",
  },
  {
    id: 3,
    name: "Shakil",
    email: "s@gmail.com",
    password: "password",
  },
  {
    id: 4,
    name: "User",
    email: "user@gmail.com",
    password: "password",
  },
];
