import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="h-[163px] lg:h-[177.81px] bg-[#F4F9FF] flex lg:flex-row justify-center pt-5 pb-5 lg:gap-[106px] gap-0">
      <div className=" hidden lg:flex lg:flex-col lg:items-center">
        <Image
          src={"/image/feature1.svg"}
          alt="feature1-frame"
          width={50}
          height={48}
          className=""
        />
        <h1 className="text-[16px] text-[#00357B] p-2">BOOK WITH</h1>
        <h1 className="text-[#00357B] text-[30px] font-bold">Only 20%</h1>
        <div className="w-[73px] h-[5px] opacity-[12%] bg-[#00357B]"></div>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src={"/image/feature2.svg"}
          alt="feature1-frame"
          width={50}
          height={48}
        />
        <h1 className="text-[12px] lg:text-[16px] text-[#00357B] p-1">
          PAYMENT PLAN
        </h1>
        <h1 className="text-[#00357B] text-[25px] lg:text-[30px] font-bold">
          Easy 70/30
        </h1>
        <div className="w-[73px] h-[5px] opacity-[12%] bg-[#00357B]"></div>
      </div>
      <div className="flex flex-col items-center w-[149px] h-[123px] ">
        <Image
          src={"/image/feature3.png"}
          alt="feature1-frame"
          width={50}
          height={48}
        />
        <h1 className="text-[12px] lg:text-[16px] text-[#00357B] p-2">
          HANDOVER ON
        </h1>
        <h1 className="text-[#00357B] text-[25px] lg:text-[30px] font-bold">
          Q2 2027
        </h1>
        <div className="w-[73px] h-[5px] opacity-[12%] bg-[#00357B]"></div>
      </div>
      <div className="hidden lg:flex lg:flex-col lg:items-center">
        <Image
          src={"/image/feature4.svg"}
          alt="feature1-frame"
          width={50}
          height={48}
        />
        <h1 className="text-[16px] text-[#00357B] p-2">AREA STARTS FROM</h1>
        <h1 className="text-[#00357B] text-[30px] font-bold">700 sqmt</h1>
        <div className="w-[73px] h-[5px] opacity-[12%] bg-[#00357B]"></div>
      </div>
    </div>
  );
};

export default Features;
