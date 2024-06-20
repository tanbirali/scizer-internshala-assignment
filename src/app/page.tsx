import FeatureAndAmenities from "@/components/featureAmenities";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Preview from "@/components/previewContainer";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-[url('/image/damac_hero.jpeg')] bg-contain lg:bg-cover p-4 lg:pt-20  lg:px-32 lg:pb-32">
        <Navbar />
        <Header />
      </div>
      <Features />
      <FeatureAndAmenities />
      <div className="flex lg:justify-end justify-center gap-[11px] w-[317px] h-[49px] lg:px-40 pb-6">
        <button className="text-[13px] w-[153px] h-[48px] bg-[#00357B] text-[#FCFCFC] rounded-md ">
          EXTERIORS
        </button>
        <button className="text-[#00357B] rounded-md border border-[#00357B] text-[13px] w-[153px] h-[48px]">
          INTERIORS
        </button>
      </div>
      <Preview />
      <Footer />
    </main>
  );
}
