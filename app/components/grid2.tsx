import Image from "next/image"

const Grid2 = () => {
  return (
    <div className='grid grid-clos-1  sm:grid-clos-2 md:grid-cols-3 lg:grid-cols-4 gap-3 items-center justify-center bg-[#F7F7F7]  h-[320px]'>
    <div className="border p-10 rounded-lg hover:shadow-lg transition ">
    <Image src={"/images/Group.svg"} alt="car" width={65} height={65} className='top[122px] left[70px] flex justify-center items-center'></Image>
    <h1 className="p-3 font-bold">24/7 Support</h1>
    <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Massa purus gravida.</p>
        
    </div>
    {/* card2 */}
    <div className="border p-10 rounded-lg hover:shadow-lg transition ">
    <Image src={"/images/cashback 1.svg"} alt="cashback" width={65} height={65} className='top[122px] left[70px] flex justify-center items-center'></Image>
    <h1 className="p-3 font-bold">24/7 Support</h1>
    <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Massa purus gravida.</p>
        
    </div>
    {/* card3 */}
    <div className="border p-10 rounded-lg hover:shadow-lg transition ">
    <Image src={"/images/Group (1).svg"} alt="cashback" width={65} height={65} className='top[122px] left[70px] flex justify-center items-center'></Image>
    <h1 className="p-3 font-bold">24/7 Support</h1>
    <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Massa purus gravida.</p>
        
    </div>
    {/* card4 */}
    {/* card3 */}
    <div className="border p-10 rounded-lg hover:shadow-lg transition ">
    <Image src={"/images/Group (2).svg"} alt="cashback" width={65} height={65} className='top[122px] left[70px] flex justify-center items-center'></Image>
    <h1 className="p-3 font-bold">24/7 Support</h1>
    <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Massa purus gravida.</p>
        
    </div>
    </div>
  )
}

export default Grid2
