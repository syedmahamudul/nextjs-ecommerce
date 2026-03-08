    import Link from "next/link";

export default function ProductCard({product}){

 return(

  <div className="border p-4 rounded">

   <img
    src={product.image}
    className="h-40 w-full object-cover"
   />

   <h2 className="font-bold mt-2">
    {product.name}
   </h2>

   <p className="text-green-600">
    ${product.price}
   </p>

   <Link href={`/product/${product._id}`}>

    <button className="bg-black text-white px-4 py-1 mt-2">
     View
    </button>

   </Link>

  </div>

 )

}