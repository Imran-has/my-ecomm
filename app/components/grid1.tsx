import Image from "next/image"

const Grid1 = () => {
  return (
    <div className='grid grid-clos-1  sm:grid-clos-2 md:grid-cols-3 lg:grid-cols-6 gap-3 items-center justify-center bg-[#F7F7F7]  h-[306px]'>
      <div className="border p-10 rounded-lg hover:shadow-lg transition"><Image src={"/images/image 1166.svg"} alt=" chair" width={223} height={229} className='top[122px] left[70px]'></Image>
      <div>
        <ul className="flex justify-between gap-3">
          <li >Comfort Handy Craft</li>
          <li >$42.00</li>
          <li className="text-[#FB2448]">$65.00</li>
        </ul>
       </div>
       </div>
       {/* 2nd card */}
       <div className="border p-10 rounded-lg hover:shadow-lg transition"><Image src={"/images/Frame 1.svg"} alt=" chair" width={245} height={245} className='top[122px] left[70px]'></Image>
      <div>
        <ul className="flex justify-between gap-3">
          <li >Comfort Handy Craft</li>
          <li >$42.00</li>
          <li className="text-[#FB2448]">$65.00</li>
        </ul>
       </div>
       </div>
       {/* 3rd card */}
       <div className="border p-10 rounded-lg hover:shadow-lg transition "><Image src={"/images/image 1168.svg"} alt=" chair" width={228} height={228} className='top[122px] left[70px]'></Image>
      <div>
        <ul className="flex justify-between gap-3">
          <li >Comfort Handy Craft</li>
          <li >$42.00</li>
          <li className="text-[#FB2448]">$65.00</li>
        </ul>
       </div>
       </div>
       {/* 4th card */}
       <div className="border p-10 rounded-lg hover:shadow-lg transition "><Image src={"/images/image 23.svg"} alt=" chair" width={267} height={277} className='top[122px] left[70px]'></Image>
      <div>
        <ul className="flex justify-between gap-3">
          <li >Comfort Handy Craft</li>
          <li >$42.00</li>
          <li className="text-[#FB2448]">$65.00</li>
        </ul>
       </div>
       </div>
       {/* 5th card */}
       <div className="border p-10 rounded-lg hover:shadow-lg transition "><Image src={"/images/image 32 (1).svg"} alt=" chair" width={303} height={264} className='top[122px] left[70px]'></Image>
      <div>
        <ul className="flex justify-between gap-3">
          <li >Comfort Handy Craft</li>
          <li >$42.00</li>
          <li className="text-[#FB2448]">$65.00</li>
        </ul>
       </div>
       </div>
       {/* 6th card */}
       <div className="border p-10 rounded-lg hover:shadow-lg transition "><Image src={"/images/image 3.svg"} alt=" chair" width={360} height={261} className='top[122px] left[70px]'></Image>
      <div>
        <ul className="flex justify-between gap-3">
          <li >Comfort Handy Craft</li>
          <li >$42.00</li>
          <li className="text-[#FB2448]">$65.00</li>
        </ul>
       </div>
       </div>
    </div>
  )
}

export default Grid1
