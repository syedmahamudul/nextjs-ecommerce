"use client";

import Link from "next/link";

export default function Navbar(){

 return(

  <div className="bg-black text-white p-4 flex justify-between">

   <Link href="/">
    <h1 className="text-xl font-bold">
     MyShop
    </h1>
   </Link>

   <div className="flex gap-4">

    <Link href="/login">
     Login
    </Link>

    <Link href="/register">
     Register
    </Link>

   </div>

  </div>

 )

}