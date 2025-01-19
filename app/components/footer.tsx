import{Josefin_Sans} from "next/font/google"
import { Lato } from "next/font/google";
const Josefin_=Josefin_Sans({subsets:["latin"]});
const Lato1=Lato({
    subsets: ["latin"],
    weight: "100"
});

const Footer = () => {
  return (
    <footer>
        <div className='container  mx-auto px-5 py-10 '>
     <div className='grid grid-clos-1 md:grid-clos-3 lg-grid-clos-4 gap-8'>
      <div>
        <h2 className={`${Josefin_.className}text-[#000000 w-[110px] h-[38px] font-bold text-2xl`}>Hekto</h2>
        {/* <p>Enter Email Address</p> */}
        <div className=' flex mt-3'>
            <input type='email'
            placeholder='Email Address' className={`${Lato1.className}border px-3 py-3 rounded-l-md text-[#8A8FB9] focus:outline-none`}/>
            <button className='bg-[#FB2E86] text-white px-7 py-2 rounded-r-md'> Sign Up</button>
        </div>
        <p className={`${Lato1.className}text-sm mt-4  text-[#8A8FB9] `}> Contact Info<br/> 17 Princess Road, London, Greater London NW1 8JR,UK</p>
        <div className="flex  flex-col justify-center items-center">
        <h3 className=" font-semibold mb-4">Categories</h3>
        <ul className={`${Lato1.className}space-y-2  text-[#8A8FB9]`}>
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
      </div>
      </div>
      <div className="flex  flex-col justify-center items-center">
        <h3 className=" font-semibold mb-4">Categories</h3>
        <ul className={`${Lato1.className}space-y-2  text-[#8A8FB9]`}>
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
      </div>
      <div className="flex  flex-col justify-center items-center">
            <h3 className="font-semibold mb-4">Customer Care</h3>
            <ul className={`${Lato1.className}space-y-2 text-[#8A8FB9]`}>
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Order History</li>
              <li>Order Tracking</li>
            </ul>
          </div>
          <div className="flex  flex-col justify-center items-center">
            <h3 className="font-semibold mb-4">Pages</h3>
            <ul className={`${Lato1.className}space-y-2 text-[#8A8FB9]`}>
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>WooCommerce Pages</li>
            </ul>
          </div>
     </div>
     <div className="bg-[#E7E4F8] border-t mt-8 pt-4 text-sm w-[1920px] h-[53px]">
          <p className="text-[#9DA0AE]">&copy;  Webecy - All Rights Reserved</p>
        </div> 
     </div>
    </footer>
  )
}

export default Footer
