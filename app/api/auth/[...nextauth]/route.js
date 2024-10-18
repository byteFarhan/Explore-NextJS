// import connectDB from "@/lib/connectDB";
// import NextAuth from "next-auth/next";
// // import Credentials from "next-auth/providers/credentials";
// import CredentialsProvider from "next-auth/providers/credentials";

// // console.log(process.env.NEXT_PUBLIC_AUTH_SECRET);
// export const authOptions = {
//   secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
//   session: {
//     strategy: "jwt",
//     maxAge: 30 * 24 * 60 * 60,
//   },
//   providers: [
//     CredentialsProvider({
//       credentials: {
//         email: {
//           label: "Email",
//           type: "email",
//           required: true,
//           placeholder: "Your email",
//         },
//         password: {
//           label: "Password",
//           type: "password",
//           required: true,
//           placeholder: "Enter Password",
//         },
//       },
//       async authorize(credentials) {
//         const { email, password } = credentials;
//         if (!credentials) {
//           return null;
//         }
//         // return { user: { email, password } };
//         // const currentUser = users.find((user) => user.email === email);
//         if (email) {
//           const bd = await connectDB();
//           const currentUser = await bd.collection("users").findOne({ email });
//           console.log(currentUser);
//           if (currentUser) {
//             if (currentUser.password === password) {
//               return currentUser;
//             }
//           }
//         }
//         return null;
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, account, user }) {
//       // Persist the OAuth access_token and or the user id to the token right after signin
//       if (account) {
//         token.role = user.role;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.user.role = token.role;
//       return session;
//     },
//   },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

// const users = [
//   {
//     id: 1,
//     name: "Mehedi",
//     email: "m@gmail.com",
//     password: "password",
//     role: "admin",
//     image: "https://picsum/photos/200/300",
//   },
//   {
//     id: 2,
//     name: "Zihad",
//     email: "z@gmail.com",
//     password: "password",
//     role: "admin",
//     image: "https://picsum/photos/200/300",
//   },
//   {
//     id: 3,
//     name: "Shakil",
//     email: "s@gmail.com",
//     password: "password",
//     role: "user",
//     image: "https://picsum/photos/200/300",
//   },
//   {
//     id: 4,
//     name: "User",
//     email: "user@gmail.com",
//     password: "password",
//     role: "user",
//     image: "https://picsum/photos/200/300",
//   },
// ];

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
  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.type = user.type;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.type = token.type;
      return session;
    },
  },
  //   pages: {
  //     signIn: "api/auth/signin",
  //   },
});

export { handler as POST, handler as GET };
