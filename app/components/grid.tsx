import Image from "next/image"

const Grid = () => {
  return (
    <div className='grid grid-cols-4  items-center'>
      <div><Image src={"/images/chair 2.png"} alt="chair 2" width={178} height={178} className='top[122px] left[70px]'></Image></div>
      
      <div><Image src={"/images/chair 3.png"} alt="chair 3" width={270} height={361} className='top[122px] left[70px]'></Image></div>
      <div><Image src={"/images/chair 4.png"} alt="chair 4" width={175} height={175} className='top[122px] left[70px]'></Image></div>
      <div><Image src={"/images/chair 5.png"} alt="chair 5" width={270} height={361} className='top[122px] left[70px]'></Image></div>
    </div>
  )
}

export default Grid
