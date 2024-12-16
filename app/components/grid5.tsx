import{Josefin_Sans} from "next/font/google"
import { Lato } from "next/font/google";
import Image from "next/image";


const Josefin_=Josefin_Sans({subsets:["latin"]});
const Lato1=Lato({
    subsets: ["latin"],
    weight: "100"
});

const Grid5 = () => {
  return (
    <div className='grid grid-clos-1 lg:grid-cols-2 gap-5 items-center'>
      <div>
      <div>
            <h3 className={`${Josefin_.className}flex justify-center items-center font-bold text-[#151875] gap-6 text-2xl">`}>20% Discount Of All Products</h3>
            <h4 className={`${Josefin_.className}flex justify-center items-center  text-[#FB2E86] gap-6  W-[199px] h-[28px]">`}>Eams Sofa Compact</h4>
            <p className={`${Lato1.className}flex justify-center items-center  text-[#B7BACB] gap-6 ">`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
          <ul className="list-disc space-y-2 text-[#B8BD]">
            <li>Material expose like metals</li>
            <li>Simple neutral colours.</li>
            <li>Clear lines and geomatric figures</li>
            <li>Material expose like metals</li>
          </ul>
          <button className={`${Josefin_.className} mt-6 px-6 py-2 bg-[#FB2E86] text-white flex justify-center items-center`}>Shop Now</button>
         
        </div>
        
      </div>
      <div className="relative ">
                
                <div className="absolute inset-0 flex items-center justify-center ml-15 p-3 left-[515 px ] top-20" > 
                <Image src={"/images/Group 154.svg"} alt=" chair" width={669} height={597} className='top-[3px] left-[19px]'></Image>
                
              </div>
            </div>
    </div>
  ) 
}

export default Grid5
