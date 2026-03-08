import Order from "@/models/Order";
import { connectDB } from "@/lib/mongodb";

export async function PUT(req,{params}){

 const body = await req.json();

 await connectDB();

 const order = await Order.findByIdAndUpdate(

   params.id,
   {status: body.status},
   {new:true}

 );

 return Response.json(order);
}