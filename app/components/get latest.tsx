import Image from "next/image"


const Getlatest = () => {
  return (
    <div className="relative  ">
      <div className="  top-1/2  left-1/2  transform -translate-x-1/2-translate-y-1/2 text-center flex justify-center items-center w-[1920px] h-[462px top-[6023px]">
        <Image src={"/images/Rectangle 102.svg"} alt="Rectangel image" width={1920} height={462}></Image>
        <div className=" absolute flex justify-center items-center flex-col mt-6">
            <h1 className=" text-[#151875] text-3xl font-bold">Get Leatest Update By Subscribe<br/>
            0ur Newslater</h1>
            <button className="text-[#FFFFFF] bg-[#FB2E86] mt-2">Shop NOW</button>
        </div>
      </div>
    <div className=" flex justify-center items-center w-[904px] h-[93px] top-[6581px] left-[508px] p-5 m-5">
    <Image src={"/images/image 1174.svg"} alt="image" width={904} height={93} ></Image>
    </div>
    </div>
  )
}

export default Getlatest
