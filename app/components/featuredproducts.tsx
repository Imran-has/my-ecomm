import{Josefin_Sans} from "next/font/google"
import Image from "next/image";

const Josefin_=Josefin_Sans({subsets:["latin"]});
const Featuredproducts = () => {
    return (
        <div className="flex justify-center items-center">
             <div className="flex justify-center items-center pt-[30px]">
        <h1 className={`${Josefin_.className}flex justify-center items-center font-bold text-[#1A0B5B] gap-6">`}>Featured Products</h1>
      </div>
       <div className="grid grid-cols-4 gap-4 p-4">
       
       
       </div>
        </div>
     
    )
  }
  
  export default Featuredproducts