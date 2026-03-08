import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

async function getProducts(){

 const res = await fetch(
  "http://localhost:3000/api/products",
  {cache:"no-store"}
 );

 return res.json();

}

export default async function Home(){

 const products = await getProducts();

 return(

  <div>

   <Navbar/>

   <div className="p-10">

    <h1 className="text-3xl font-bold mb-6">
     Latest Products
    </h1>

    <div className="grid grid-cols-4 gap-6">

     {/* {products.map(product=>(
       <ProductCard
        key={product._id}
        product={product}
       />
     ))} */}

    </div>

   </div>

  </div>

 )

}