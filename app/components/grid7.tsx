import Image from "next/image"

const Grid7 = () => {
  return (
    <div className='grid grid-clos-2 md:grid-cols-3 gap-0 '>

       <div>
        <Image src={"/images/trend 2021.svg"} alt="trend image" width={370} height={255} className="mx-auto  rounded shadow-md"></Image>
        <ul className="flex justify-center items-center gap-5 p-2">
            <li>SaberAli</li>
            <li>21 August,2020</li>
        </ul>
       </div>
        
        </div>
  )
}

export default Grid7
