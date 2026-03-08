import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {

  const body = await req.json();

  await connectDB();

  const hashed = await bcrypt.hash(body.password,10);

  const user = await User.create({

    name: body.name,
    email: body.email,
    password: hashed

  });

  return Response.json(user);
}