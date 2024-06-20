import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <Link href={"/"}>
        <Image
          src={"/image/damac_logo.png"}
          alt="logo"
          width={156}
          height={200}
        />
      </Link>
      <div className="hidden lg:block lg:bg-transparent lg:p-4 lg:rounded-md lg:border-2 lg:border-[#17ABFF]">
        <h1 className="text-[#17ABFF] font-bold">Enquire More</h1>
      </div>
      <Menu color="white" className="text-2xl font-bold lg:hidden" />
    </div>
  );
};

export default Navbar;
