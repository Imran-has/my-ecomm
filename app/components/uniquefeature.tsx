import Image from "next/image"
import{Josefin_Sans} from "next/font/google"
const Josefin_=Josefin_Sans({subsets:["latin"]});

const Uniquefeature = () => {
  return (
    <div className='bg-[#F1F0FF]'>
        <div>
        <h2 className={`${Josefin_.className}text-2xl font-bold text-[#000000] w-[507] h-[92] ">
    `}>Unique Features Of leatest &<br/>
Trending Poducts</h2>
        <ul className="space-y-4 justify-center items-center  ">
            <li>.All frames constructed with hardwood solids and laminates</li>
            <li>.Reinforced with double wood dowels, glue, screw - nails corner 
            blocks and machine nails</li>
            <li>.Arms, backs and seats are structurally reinforced</li>
            
        </ul>
      </div>
      <div className="flex  items-center gap-2">
      
        <button className="bg-[#FB2E86] text-[#FFFFFF] px-6 py-2 rounded-md font-medium">Add to Cart</button>
        <span>B&B Italian Sofa <br/>$32.00</span>
       
      </div>
      <div>
      <Image src={"/images/Group 153.svg"} alt="sofa" width={558} height={550} className='top[122px] left[70px] flex justify-center items-center'></Image>
      
      </div>
      
    </div>
  )
}

export default Uniquefeature
