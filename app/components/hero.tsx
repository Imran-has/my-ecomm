import React from 'react'
import Image from 'next/image'
import{Josefin_Sans} from "next/font/google"

const Josefin_=Josefin_Sans({subsets:["latin"]});
const Hero = () => {
  return (
    <div className='bg-[#F2F0FF] p-8 '>
        <div className='flex '>
      <p className='text-[#FB2E86] w-[230px] h-[28px]'>Best Furniture For Your Castle</p><br/>
      
      </div>
      <div className=' flex font-bold'>
      <h1 className={`${Josefin_.className}text-[#000000]`}>New Furniture Collection<br/>Trends in 2020</h1>
      </div>
      <div className='flex justify-center items-center w-[559px] h-[56px text-[#8A8FB9]'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
        in phasellus non in justo.</p>
        </div>
        <div className='w-[163px] h-[50px]'>
            <button className='bg-[#FB2E86] text-white items-center w-[163px] h-[50px]'>Shop Now</button>
        </div>
        <div className='mt-10 pt-6'>
            <Image src={"/images/image 32.svg"} alt="light" width={387} height={387} className='top[122px] left[70px]'></Image>
        
        </div>
        
        
    </div>
  )
}

export default Hero
