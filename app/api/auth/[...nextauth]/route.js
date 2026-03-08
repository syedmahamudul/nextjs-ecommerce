import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";

export const authOptions = {

 providers: [

  CredentialsProvider({

   name: "credentials",

   async authorize(credentials){

     await connectDB();

     const user = await User.findOne({
       email: credentials.email
     });

     if(!user) return null;

     const valid = await bcrypt.compare(
       credentials.password,
       user.password
     );

     if(!valid) return null;

     return user;

   }

  })

 ]

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };