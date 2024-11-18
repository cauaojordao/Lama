import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./utils";
import { User } from "./models";
import bcrypt from "bcryptjs";

const login = async (credentials) => {
  try {
    connectToDb();
    
    const user = await User.findOne({ username: credentials.username });


    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

    if (!isPasswordCorrect) {
      throw new Error("Incorrect password");
    }

    
    return {username: user.username, email: user.email, image: user.image};

  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong");
  }

};
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user
        } catch (err) {
          console.log(err);
        }
      },
    }),
  ],
  basePath: "/api/auth",
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "github") {
        connectToDb();
        try {
          const user = await User.findOne({ email: profile.email });

          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              image: profile.avatar_url,
              password: profile.id,
            });

            await newUser.save();
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      }
      return true;
    },
  },
});
