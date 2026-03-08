import Order from "@/models/Order";
import { connectDB } from "@/lib/mongodb";

export async function POST(req){

 const body = await req.json();

 await connectDB();

 const order = await Order.create(body);

 return Response.json(order);

}