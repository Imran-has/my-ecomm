 "use client"
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allProducts } from "@/sanity/lib/queries";
import { Product } from "@/types/product";
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import { addToCart } from "./Action/actions";
import Swal from "sweetalert2";



// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import Header from './components/header'
// import Bottomheader from './components/bottomheader'
// import Hero from './components/hero'
// import Featuredproducts from './components/featuredproducts'
// import Grid from './components/grid'
// import Latestproduct from './components/latestproduct'
// import Grid1 from './components/grid1'

// import Grid2 from  './components/grid2'
// import Shapofer from './components/shapofer'
// import Uniquefeature from './components/uniquefeature' 
// import Trendingproduct from './components/trendingproduct'
// import Grid3 from './components/grid3'
// import Grid4 from './components/grid4'
// import Discountitems from "./components/discountitems";
// import Grid5 from './components/grid5'
// import Topcategories from './components/topcategories'
// import Grid6 from './components/grid6'
// import Getlatest from './components/get latest'
// import Latestblog from './components/latestblog'
// import Grid7 from './components/grid7'
// import  Footer from "./components/footer"
 
 
// const Homepage = () => {
//   return (
//     <div>
//       <Header/>
//       <Bottomheader/>
//       <Hero/>
//       <Featuredproducts/>
//       <Grid/>
//       <Latestproduct/>
//       <Grid1/>
//       < Shapofer/>
//       <Grid2/>
//       <Uniquefeature/>
//       < Trendingproduct/>
//       <Grid3/>
//       <Grid4/>
//       < Discountitems/>
//       <Grid5/>
//       <Topcategories/>
//       <Grid6/>
//       <Getlatest />
//       <Latestblog/>
//       <Grid7/>
//       <Footer/>
//     </div>
//   )
// }

// export default Homepage


// type Product = {
//   _id: string;
//   name: string;
//   price: number;
//   image?: {
//     asset: {
//       url: string;
//     };
//   };
// };

// export default async function Fenture () {
//   const products: Product[] = await client.fetch(`*[_type == "product"]`);

//   return (
//     <div className="grid grid-cols-3 gap-4 p-4">
//       {products.map((product) => (
//         <div key={product._id} className="border p-4 rounded shadow">
//           <image
//             src={product.image.asset.url}
//             alt={product.name}
//             className="w-full h-48 object-cover rounded"
//           />
//           <h2 className="text-lg font-bold text-center mt-2">{product.name}</h2>
//           <p className="text-center text-gray-700">{product.price} USD</p>
//         </div>
//       ))}
//     </div>
//   );
// }
//yaha//
const Fenture = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(allProducts);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);
  
  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position:"top-right",
      icon:"success",
      title:`${product.name}added to cart`,
      showConfirmButton:false,
      timer:1000
    })
    addToCart(product)
  };
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Latest fenture</h2>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {products.map((product) => (
          
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
          ><Link href={`/Product/${product?.slug?.current}`}>
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
            )}
            <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-600 mt-2">
              {product.price ? `$${product.price}` : "Price not available"}
            </p>
            <p className="text-gray-600 mt-2">
              {product.description ? `$${product.description}` : "description not  description"}
              
            </p>
            <p className="text-gray-600 mt-2">
              {product.discountPercentage ? `$${product.discountPercentage}` : "   No discount available"}
              
            </p>
            <button className="bg-gradient-to-r from-red-500 to-purple-500 text white font-semibold py-2 px-5 rounded shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out"
              onClick={(e)=>handleAddToCart(e,product)}>
                Add to Cart
            </button>
            </Link>
          </div>
         
        ))}
      
      </div>
      
    </div>
  );
};

export default Fenture

