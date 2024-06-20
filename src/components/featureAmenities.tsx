import Image from "next/image";
import React from "react";

const FeatureAndAmenities = () => {
  return (
    <div className="mt-10 flex flex-col pt-10 pb-10">
      <Image
        src={"/image/feature-amenities-title.png"}
        alt="feature-amenities-title"
        width={182}
        height={79}
        className="m-auto"
      />
      <div className="flex flex-col items-center">
        <h1 className="text-center text-[#00357B] text-[36px] font-[Oswald]">
          FEATURES & AMENITIES
        </h1>
        <p className="text-[16px] font-[Poppins] text-center lg:w-[777px] lg:h-[84px] ">
          Harbour Lights beautifully honours maritime voyages while embracing an
          opulent seafront lifestyle. Its maritime-inspired amenities provide an
          unmatched seaside experience, offering a life of tranquility and
          bliss.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 pt-5 pb-5 gap-2 lg:gap-[70px] lg:px-40">
        <div className="relative flex flex-col items-center">
          <div className="relative z-50">
            <Image
              src={"/image/floating-pools.png"}
              alt="floating Pools"
              width={200}
              height={199}
              className="relative w-[124px] h-[120px] lg:w-[206px] lg:h-[199.5px]"
            />
          </div>
          <div className="w-[145px] flex justify-center lg:w-[227px] lg:h-[127px] rounded-b-[20px] shadow-xl pt-2 pb-2 mt-[-40px]">
            <h1 className="text-[#00357B] text-[12px] lg:text-[14px] text-center m-auto font-semibold font-[Poppins] pt-10 pb-10 px-20">
              Floating Pools
            </h1>
          </div>
        </div>
        <div className="relative flex flex-col items-center">
          <div className="relative z-50">
            <Image
              src={"/image/spacious-cabins.png"}
              alt="floating Pools"
              width={200}
              height={199}
              className="relative w-[124px] h-[120px] lg:w-[206px] lg:h-[199.5px]"
            />
          </div>
          <div className="w-[145px] flex justify-center lg:w-[227px] lg:h-[127px] rounded-b-[20px] shadow-xl pt-2 pb-2 mt-[-40px]">
            <h1 className="text-[#00357B] text-[12px] lg:text-[14px] text-center font-semibold font-[Poppins] pt-10 pb-10 px-5 lg:px-16">
              Spacious Cabins Like Rooms
            </h1>
          </div>
        </div>
        <div className="relative flex flex-col items-center">
          <div className="relative z-50">
            <Image
              src={"/image/seafacing-pools.png"}
              alt="Seafacing Pools"
              width={200}
              height={199}
              className="relative w-[124px] h-[120px] lg:w-[206px] lg:h-[199.5px]"
            />
          </div>
          <div className="w-[145px] flex justify-center lg:w-[227px] lg:h-[127px] rounded-b-[20px] shadow-xl pt-2 pb-2 mt-[-40px]">
            <h1 className="text-[#00357B] text-[12px] lg:text-[14px] text-center font-semibold font-[Poppins] pt-10 pb-10 px-6 lg:px-12">
              Sea Facing Swimming Pools
            </h1>
          </div>
        </div>
        <div className="relative flex flex-col items-center">
          <div className="relative z-50">
            <Image
              src={"/image/gym.png"}
              alt="Gym"
              width={200}
              height={199}
              className="relative w-[124px] h-[120px] lg:w-[206px] lg:h-[199.5px]"
            />
          </div>
          <div className=" w-[145px] flex justify-center lg:w-[227px] lg:h-[127px] rounded-b-[20px] shadow-xl pt-2 pb-2 mt-[-40px]">
            <h1 className="text-[#00357B] text-[12px] lg:text-[14px] text-center font-semibold font-[Poppins] pt-10 pb-10 px-20">
              Gymnasium & FItness
            </h1>
          </div>
        </div>
      </div>
      <div className="flex lg:justify-end justify-center lg:px-[168px] ">
        <h1 className="text-[#686868] text-[10px]">
          *T&Cs apply | ** Based on similar branded projects in the last 2
          years. <span className="underline">Source 1 </span>|{" "}
          <span className=" underline">Source 2</span>
        </h1>
      </div>
    </div>
  );
};

export default FeatureAndAmenities;
