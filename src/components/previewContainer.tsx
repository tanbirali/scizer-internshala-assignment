import { ChevronLeft, ChevronRight, CircleChevronLeft } from "lucide-react";
import Image from "next/image";
import React from "react";

const Preview = () => {
  return (
    <div className="flex flex-col items-center m-auto  lg:w-[1122px] lg:h-[716px]">
      <div className="relative">
        <Image
          src={"/image/Rectangle89.jpg"}
          alt="Preview Image 1"
          width={1000}
          height={100}
          className="w-[350px] md:w-[1122px] md:h-[494px] lg:w-[1122px] lg:h-[494px] rounded-[14px]"
        />
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#FCFCFC] p-2 rounded-full">
          <ChevronLeft className="text-[#00357B] text-[10px]" />
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#FCFCFC] p-2 rounded-full">
          <ChevronRight className="text-[#00357B] text-[10px]" />
        </div>
      </div>

      <div className="flex flex-row  lg:w-[1113px] lg:h-[168px] justify-center gap-[5px] lg:gap-5 pt-1 pb-1 lg:pt-4 lg:pb-4">
        <Image
          src={"/image/Rectangle90.jpg"}
          alt="Preview Image 2"
          width={250}
          height={100}
          className="w-[75px] h-[55px] lg:w-[265.05px] lg:h-[168px] rounded-[14px]"
        />
        <Image
          src={"/image/Rectangle91.jpg"}
          alt="Preview Image 3"
          width={250}
          height={100}
          className="w-[75px] h-[55px] lg:w-[265.05px] lg:h-[168px] rounded-[14px]"
        />
        <Image
          src={"/image/Rectangle92.jpg"}
          alt="Preview Image 4"
          width={250}
          height={100}
          className="w-[75px] h-[55px] lg:w-[265.05px] lg:h-[168px] rounded-[14px]"
        />
        <Image
          src={"/image/Rectangle93.jpg"}
          alt="Preview Image 5"
          width={250}
          height={100}
          className="w-[75px] h-[55px] lg:w-[265.05px] lg:h-[168px] rounded-[14px]"
        />
      </div>
    </div>
  );
};

export default Preview;
