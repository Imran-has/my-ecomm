import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/product";
import { groq } from "next-sanity";
import Image from "next/image";

interface Productpageprops{
    params:Promise<{slug:string}>;
    
}

async function getProduct(slug:string):Promise<Product>{

    return client.fetch(
        groq`*[_type =="product" && slug.current== $slug][0]{

            _id,
            name,
            _type,
            image,
            price,
            description



        }`,{slug}

        
    );

}


   export default async function ProductPage({params}:Productpageprops){
    const {slug}=await params;
    const product= await getProduct(slug)
    return(
        <div className="max-w 6xl-mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-11">
           <div className="aspect-square">
            {product.image &&(
                <Image src={urlFor(product.image).url()}
                 alt={product.name} 
                 width={400} height={400} className="rounded-lg shadow-md"
                />
                
            )}
           </div>
            </div>
            </div>
        
    )
   }