
import{Josefin_Sans} from "next/font/google"


const Josefin_=Josefin_Sans({subsets:["latin"]});

const Latestproduct = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-clos-4 gap-4 ">
             <div className="flex justify-center w-[338px] h-[42px] items-center pt-[30px]">
        <h1 className={`${Josefin_.className}flex justify-center items-center font-bold text-[#151875] gap-6 text-2xl">`}>Latest Products</h1>
        
      </div>
      <div className="flex justify-center items-center gap-6">
        <ul className="flex gap-8">
            <li className="text-[#FB4997] underline">Wood chair.</li>
            <li>Plastic chair</li>
            <li>Sofa collection</li>
            
        </ul>
        </div>
        
        </div>
       
    </div>
  )
}

export default Latestproduct
