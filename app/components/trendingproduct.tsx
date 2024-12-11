import{Josefin_Sans} from "next/font/google"


const Josefin_=Josefin_Sans({subsets:["latin"]});

const Trendingproduct = () => {
  return (
    <div>
       <div className="flex justify-center items-center pt-[30px]">
        <h1 className={`${Josefin_.className}flex justify-center items-center font-bold text-[#1A0B5B] gap-6 text-2xl">`}>Trending Products</h1>
      </div>
    </div>
  )
}

export default Trendingproduct
