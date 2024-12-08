import React from 'react'
import{Josefin_Sans} from "next/font/google"
import Link from 'next/link';
import { HiMagnifyingGlass } from "react-icons/hi2";

const Josefin_=Josefin_Sans({subsets:["latin"]});

const Bottomheader = () => {
  return (
    <div>
      <header>
      <div className='container mx-auto flex justify-between items-center px-4'>
            
        </div>
        <nav className=' flex space-x-4 justify-center items-center gap-3'>
        <h1 className={`${Josefin_.className}  flex bg-[#0D0E43]text-xl font-bold w-[98px] h-[34px]`} > Hekto</h1>
            <Link href={"#Home"} className='hover:text-gray-300 text-red-600'>Home</Link>
            <Link href={"Pages"} className='hover:text-gray-300'>Pages</Link>
            <Link href={"Products"} className='hover:text-gray-300'>Products</Link>
            <Link href={"Blog"} className='hover:text-gray-300'>Blog</Link>
            <Link href={"shop"} className='hover:text-gray-300'>Shop</Link>
            <Link href={"Contact"} className='hover:text-gray-300'>Contact</Link>
            <div className='relative'>
            <input
             
             type="text"
             placeholder='search...'
             className='p-2  text-white-900 w-[347px] h-[38px]'
             
            />
            <button className='absolute right-1  top-1/6 transform-y 1/2 p-3 border-4 text-white bg-pink-600 ml-10'><HiMagnifyingGlass /></button>
            
            
            </div>
            
      
        </nav>
      </header>
    </div>
  )
}

export default Bottomheader
