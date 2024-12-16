import Image from "next/image"
import{Josefin_Sans} from "next/font/google"
const Josefin_=Josefin_Sans({subsets:["latin"]});
const Grid6 = () => {
  return (
    <div className='grid grid-clos-2 md:grid-cols-4 gap-0 '>
      <div className='text-center'>
        <div className='relative'>
            <Image src={"/images/image 20.svg"} alt="chair" width={178} height={178} className="mx-auto rounded-full shadow-md"></Image>
            <span className=" flex justify-center items-center absolute bottom-0 right-1/2 transform-translate-x-1/2 bg-[#80D15F]  text-[#FFFFFF] text-sm px-3 rounded-full"> View Shop</span>

        </div>
        <h3 className={`${Josefin_.className}mt-4  text-[#151875]`}> Mini LCW Chair</h3>
        <p className=" text-[#151875]">$56.00</p>
      </div>
      {/* product card2 */}
      <div className='text-center'>
        <div className='relative'>
            <Image src={"/images/chair image.svg"} alt="chair" width={158} height={157} className="mx-auto rounded-full shadow-md"></Image>
            

        </div>
        <h3 className={`${Josefin_.className}mt-4  text-[#151875]`}> Mini LCW Chair</h3>
        <p className=" text-[#151875]">$56.00</p>
      </div>
      
        {/* product card3 */}
        <div className='text-center'>
        <div className='relative'>
            <Image src={"/images/chair image2.svg"} alt="chair" width={149} height={149} className="mx-auto rounded-full shadow-md"></Image>
            

        </div>
        <h3 className={`${Josefin_.className}mt-4  text-[#151875]`}> Mini LCW Chair</h3>
        <p className=" text-[#151875]">$56.00</p>
      </div>
        {/* product card4 */}
        <div className='text-center'>
        <div className='relative'>
            <Image src={"/images/chair image3.svg"} alt="chair" width={158} height={157} className="mx-auto rounded-full shadow-md"></Image>
            

        </div>
        <h3 className={`${Josefin_.className}mt-4  text-[#151875]`}> Mini LCW Chair</h3>
        <p className=" text-[#151875]">$56.00</p>
      </div>
    </div>
  )
}

export default Grid6
