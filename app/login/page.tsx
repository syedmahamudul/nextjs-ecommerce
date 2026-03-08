export default function Login(){

 return(

  <div className="flex justify-center mt-20">

   <form className="border p-6 w-80">

    <h2 className="text-xl mb-4">
     Login
    </h2>

    <input
     placeholder="Email"
     className="border p-2 w-full mb-2"
    />

    <input
     placeholder="Password"
     type="password"
     className="border p-2 w-full mb-2"
    />

    <button className="bg-black text-white w-full py-2">
     Login
    </button>

   </form>

  </div>

 )

}