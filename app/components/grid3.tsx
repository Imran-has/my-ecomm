import Image from "next/image"

const Grid3 = () => {
  return (
    <div className='grid grid-clos-1  sm:grid-clos-2 md:grid-cols-3 lg:grid-cols-4 gap-3 items-center justify-center bg-[#F7F7F7]  h-[350px]'>
    <div className="border p-10 rounded-lg hover:shadow-lg transition"><Image src={"/images/image 1171.svg"} alt=" chair" width={247} height={244} className='top[122px] left[70px]'></Image>
      <div>
        <ul className="flex justify-between gap-3">
          <li >Cantilever chair</li>
          <li >$26.00 </li><br/>
          <li className="text-[#151875]">$42.00</li>
        </ul>
       </div>
       </div>
       {/* cart2 */}
       <div className="border p-10 rounded-lg hover:shadow-lg transition"><Image src={"/images/image 1170.svg"} alt=" chair" width={247} height={244} className='top[122px] left[70px]'></Image>
      <div>
        <ul className="flex justify-between gap-3">
          <li >Cantilever chair</li>
          <li >$26.00 </li>
          <li className="text-[#151875]">$42.00</li>
        </ul>
       </div>
       </div>
        {/* cart3 */}
        <div className="border p-10 rounded-lg hover:shadow-lg transition"><Image src={"/images/image 31.svg"} alt=" chair" width={247} height={244} className='top[122px] left[70px]'></Image>
      <div>
        <ul className="flex justify-between gap-3">
          <li >Cantilever chair</li>
          <li >$26.00 </li>
          <li className="text-[#151875]">$42.00</li>
        </ul>
       </div>
       </div>
        {/* cart4 */}
        <div className="border p-10 rounded-lg hover:shadow-lg transition"><Image src={"/images/image 32 (3).svg"} alt=" chair" width={253} height={11} className='top[122px] left[70px]'></Image>
      <div>
        <ul className="flex justify-between gap-3">
          <li >Cantilever chair</li>
          <li >$26.00 </li>
          <li className="text-[#151875]">$42.00</li>
        </ul>
       </div>
       </div>
    </div>
  )
}

export default Grid3
