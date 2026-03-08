export default function Register(){

 return(

  <div className="flex justify-center mt-20">

   <form className="border p-6 w-80">

    <h2 className="text-xl mb-4">
     Register
    </h2>

    <input
     placeholder="Name"
     className="border p-2 w-full mb-2"
    />

    <input
     placeholder="Email"
     className="border p-2 w-full mb-2"
    />

    <input
     type="password"
     placeholder="Password"
     className="border p-2 w-full mb-2"
    />

    <button className="bg-black text-white w-full py-2">
     Register
    </button>

   </form>

  </div>

 )

}