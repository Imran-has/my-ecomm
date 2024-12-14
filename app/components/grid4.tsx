import Image from "next/image"

const Grid4 = () => {
  return (
    <div className="grid grid-clos-1  sm:grid-clos-2 md:grid-cols-3 lg:grid-cols-3 gap-3 items-center justify-center   ">
        
    <div className="border p-10 rounded-lg hover:shadow-lg transition  bg-[#FFF6FB] w-[420px] h-[270]">
    <h2 className="text-[#151875]">23% off in all products </h2>
       
       <p className="text-[#FB2E86] underline">Shop Now</p>
        <Image src={"/images/image 1162.svg"} alt=" chair" width={213} height={207} className='top-[4323px] left-[576px]'></Image>
       
       </div>
      {/* cart2 */}
      <div className="border p-10 rounded-lg hover:shadow-lg transition  bg-[#EEEFFB]">
    <h2 className="text-[#151875]">23% off in all products </h2>
       
       <p className="text-[#FB2E86] underline">Shop Now</p>
        <Image src={"/images/image 1161.svg"} alt=" chair" width={312} height={173} className='top-[4357px] left-[926px]'></Image>
       
       </div>
       {/* cart3 */}
        
      <div className=" border p-10 rounded-lg hover:shadow-lg transition  ">
      <div className="relative">
        <Image src={"/images/image 30.svg"} alt=" chair" width={64} height={71} className='top-[2px] left-[21px]'></Image>
        
        <div className="absolute inset-0 flex items-center justify-center" > 
          <h2 className="text-[#151875]  w-[151] h-[33px] text-sm font-semibold top-[21] left-[116px]">Executive Seat chair
      $32.00 </h2>
      </div>
    </div>
        
       
       {/* cart2 */}
       <div className="relative">
        <Image src={"/images/image 19.svg"} alt=" chair" width={67} height={67} className='top-[3px] left-[19px]'></Image>
        
        <div className="absolute inset-0 flex items-center justify-center" > 
          <h2 className="text-[#151875]  w-[151] h-[33px] text-sm font-semibold top-[21] left-[116px]">Executive Seat chair
      $32.00 </h2>
      </div>
    </div>
    {/* cart3 */}
    <div className="relative">
        <Image src={"/images/image 28.svg"} alt=" chair" width={67} height={67} className='top-[3px] left-[17px]'></Image>
        
        <div className="absolute inset-0 flex items-center justify-center" > 
          <h2 className="text-[#151875]  w-[151] h-[33px] text-sm font-semibold top-[21] left-[116px]">Executive Seat chair
      $32.00 </h2>
      </div>
    </div>
        
       </div>
    </div>
  )
}

export default Grid4
