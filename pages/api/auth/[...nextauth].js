import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connect } from "mongoose";
import { UserModel } from "@/models/User";
import { compare } from "bcryptjs";

export const authOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        await connect(`${process.env.CONNECTION}`);

        const user = await UserModel.find({ email: credentials.email });

        if (user.length === 0) throw new Error("Email");

        const passwordCompare = await compare(
          credentials.password,
          user[0].password
        );

        if (!passwordCompare) throw new Error("password");

        return { email: credentials.email };
      },
    }),
  ],
};

export default NextAuth(authOptions);
