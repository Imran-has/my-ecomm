import Image from "next/image"
import{Josefin_Sans} from "next/font/google"
import { Lato } from "next/font/google";
const Josefin_=Josefin_Sans({subsets:["latin"]});
 const Lato1=Lato({
  subsets: ["latin"],
  weight: "100"
});

const Grid7 = () => {
  return (
    <div className='grid grid-clos-2 md:grid-cols-3 gap-0 '>

       <div>
        <Image src={"/images/trend 2021.svg"} alt="trend image" width={370} height={255} className="mx-auto  rounded shadow-md ml-4"></Image>
        <ul className={`${Josefin_.className}  flex  items-center gap-5 p-2`}>
            <li >SaberAli</li>
            <li>21 August,2020</li>
        </ul>
        <div className="flex flex-col  gap-6">
        <h1 className={`${Josefin_.className} text-[#151875] font-bold`}>Top esssential Trends in 2021</h1>
        <p className={`${Lato1.className}text-[#72718F] flex gap-5`}>More off this less hello samlande lied much
        over <br/> tightly circa horse taped mightly</p>
        <p className={`${Lato1.className}text-[#151875] underline  `}>Read More</p>
        </div>
       </div>
       <div>
        <Image src={"/images/trend 1.svg"} alt="trend image" width={370} height={255} className="mx-auto  rounded shadow-md ml-4"></Image>
        <ul className={`${Josefin_.className}  flex  items-center gap-5 p-2`}>
            <li >Surfauxion</li>
            <li>21 August,2020</li>
        </ul>
        <div className="flex flex-col  gap-6">
        <h1 className={`${Josefin_.className} text-[#FB2E86] font-bold`}>Top essential trends in 2021</h1>
        <p className={`${Lato1.className}text-[#72718F] flex gap-5`}>More off this less hello samlande lied much
        over <br/> tightly circa horse taped mightly</p>
        <p className={`${Lato1.className} text-[#FB2E86] underline `}>Read More</p>
        </div>
       </div>
       <div>
        <Image src={"/images/Frame 3.svg"} alt="frame-image" width={370} height={255} className="mx-auto  rounded shadow-md ml-4"></Image>
        <ul className={`${Josefin_.className}  flex  items-center gap-5 p-2`}>
            <li >SaberAli</li>
            <li>21 August,2020</li>
        </ul>
        <div className="flex flex-col  gap-6">
        <h1 className={`${Josefin_.className} text-[#151875] font-bold`}>Top esssential Trends in 2021</h1>
        <p className={`${Lato1.className}text-[#72718F] flex gap-5`}>More off this less hello samlande lied much
        over <br/> tightly circa horse taped mightly</p>
        <p className={`${Lato1.className}text-[#151875] underline  `}>Read More</p>
        </div>
       </div>
        </div>
  )
}

export default Grid7
