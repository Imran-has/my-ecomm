import Image from "next/image"

const Grid = () => {
  return (
    <div className='grid grid-clos-1  sm:grid-clos-2 md:grid-cols-4 gap-3 items-center'>
      <div className="border p-10 rounded-lg hover:shadow-lg transition"><Image src={"/images/chair 2.png"} alt="Cantilever chair" width={178} height={178} className='top[122px] left[70px]'></Image>
      <h3 className="text-lg font-semibold text-[#FB2E86] mt-4">Cantilever Chair</h3>
      <p className="text-sm text-gray-600">Code:Y523201</p>
      <p className="text-lg font-bold text-gray-800">$42.00</p>
      
      </div>
      
      <div className="border p-10 rounded-lg hover:shadow-lg transition"><Image src={"/images/chair 3.png"} alt="chair 3" width={270} height={361} className='top[122px] left[70px]'></Image>
      <button className="mt-2 p-3 bg-[#08D15f] text-white text-sm rounded hover:bg-gree-600">View Details</button>
      <h3 className="text-lg font-semibold text-[#2F1AC4] mt-4">Cantilever Chair</h3>
      <p className="text-sm text-gray-600">Code:Y523201</p>
      <p className="text-lg font-bold text-gray-800">$42.00</p>
      
      </div>
      <div className="border p-10 rounded-lg hover:shadow-lg transition"><Image src={"/images/chair 4.png"} alt="chair 4" width={175} height={175} className='top[122px] left[70px]'></Image>
      <h3 className="text-lg font-semibold text-[#FB2E86] mt-4">Cantilever Chair</h3>
      <p className="text-sm text-gray-600">Code:Y523201</p>
      <p className="text-lg font-bold text-gray-800">$42.00</p>
      </div>
      <div className="border p-10 rounded-lg hover:shadow-lg transition"><Image src={"/images/chair 5.png"} alt="chair 5" width={270} height={361} className='top[122px] left[70px]'></Image>
      <h3 className="text-lg font-semibold text-[#FB2E86] mt-4">Cantilever Chair</h3>
      <p className="text-sm text-gray-600">Code:Y523201</p>
      <p className="text-lg font-bold text-gray-800">$42.00</p>
      </div>
    </div>
  )
}

export default Grid
