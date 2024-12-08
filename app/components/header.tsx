import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <div className='flex justify-between '>
      <header className=' bg-[#7E33E0] w-[1920px] h-[44px]'>
        <div className=''>
            <div className='text-white flex gap-8 pt-3 ml-20'>
            <MdOutlineEmail />
            <p>mhhasanul@gmail.com</p>
            <FaPhoneVolume />
            <p>(12345)67890</p>
            <div className='flex gap-5'>
        <select className=' flex border border-gray-300 rounded px-3 py-1 gap-4 ml-24'>
                <option value="en">English</option>
                <option value="ur">Urdu</option>
                <option value="fr">French</option>

                
            </select>
            <select className=' flex border border-gray-300 rounded px-3 py-1 gap-4 ml-24'>
                <option value="en">USA</option>
                <option value="ur">PAK</option>
                <option value="fr">IND</option>

                
            </select>

            <p className='flex'>Login</p>
            <GrUserManager />
            <p className='flex '>Wishlist</p>
            <FaRegHeart />
            <FiShoppingCart />
        </div>
        
            
            </div>
            
        </div>
        

      </header>
    </div>
  )
}

export default Header
