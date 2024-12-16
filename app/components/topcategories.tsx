import{Josefin_Sans} from "next/font/google"


const Josefin_=Josefin_Sans({subsets:["latin"]});


const Topcategories = () => {
  return (
    
 <div className="grid grid-clos-4 gap-4 top-[5402px] left-[810px]">
             <div className="flex justify-center items-center pt-[30px]">
        <h1 className={`${Josefin_.className}flex justify-center items-center font-bold text-[#151875] gap-6 text-2xl">`}>Top Categories</h1>
      </div>
        </div>
    
  )
}

export default Topcategories
