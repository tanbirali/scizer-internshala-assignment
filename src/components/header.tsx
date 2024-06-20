import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col items-center  gap-10 lg:flex-row lg:justify-between pt-20 pb-20 ">
      <div className="flex flex-col">
        <div className="lg:w-[498.66px] lg:h-[217px]">
          <h1 className="text-white font-bold text-[37px] lg:text-[48px]">
            HARBOUR LIGHTS
          </h1>
          <h1 className="text-white font-bold text-[37px] lg:text-[48px]">
            DE <span className="text-[#17ABFF]">GRESOGONO</span>
          </h1>
          <h1 className="text-[#FCFCFC] text-[25px] font-bold">
            1, 2 & 3 Bedrooms Seaside Apartments{" "}
          </h1>
          <h1 className="text-[#FCFCFC] text-[25px] font-bold">
            in Dubai Maritime City
          </h1>
        </div>
        <div className="lg:w-[305px] lg:h-[89px] gap-6 mt-20">
          <div className="flex mb-2">
            <div className="border-r-2 border-[#17ABFF] h-[37px] w-[3px]"></div>
            <div className="bg-[#00000042] w-[304px] h-[37px] flex items-center px-5">
              <h1 className="text-[#E7EBEF] text-[14px]">
                Rental Returns of
                <span className="font-bold">UPTO 11%**</span>
              </h1>
            </div>
          </div>
          <div className="flex">
            <div className="border-r-2 border-[#17ABFF] h-[37px] w-[3px]"></div>
            <div className="bg-[#00000042] w-[304px] h-[37px] flex items-center px-5">
              <h1 className="text-[#E7EBEF] text-center text-[14px]">
                Capital Appreciation of{" "}
                <span className="font-bold">UPTO 32%**</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="bg-[#5790BE1F] w-[303.08px] h-[321px] rounded-md pt-10 px-6  ">
          <h1 className="text-[13px] text-[#FCFCFC]">PRICING STARTS FROM</h1>
          <h1 className="text-[48px] text-[#FCFCFC] font-bold">$ 425,000</h1>
          <h1 className="text-[24px] text-[#FCFCFC] font-semibold">
            AED 1.3 Million
          </h1>
          <button className="text-[#FFFFFF] text-center bg-[#17ABFF] px-[12px] py-[40px] pt-[12px] pb-[40px] rounded-sm h-[48px] w-[248px] m-[10px]">
            GET A PRESENTATION
          </button>
        </div>
        <div className="border border-[#0000004D] w-[306px]"></div>
        <div className="bg-[#5790BE1F] w-[303.08px] h-[61px] rounded-md p-3 ">
          <h1 className="text-[#98C5E8] text-[13px]">
            Get an Expert&apos;s Presentation of Real Estate in Dubai for Life
            and investment
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
