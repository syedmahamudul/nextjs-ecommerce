import { getToken } from "next-auth/jwt";

export async function middleware(req){

 const token = await getToken({req});

 if(req.nextUrl.pathname.startsWith("/checkout")){

   if(!token){

     return Response.redirect(new URL("/login",req.url));

   }

 }

}