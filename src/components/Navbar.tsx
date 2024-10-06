"use client";
import { WaitListContext } from "@/utils/Providers";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [displaySidebar, setDisplaySidebar] = useState(false);
  const waitlist = useContext(WaitListContext);

  const openWaitList = () => {
    waitlist?.setWaitListState(true);
  };

  return (
    <nav
      className="w-full centerUtil justify-between py-5 px-[82px] border-t-[20px]
     border-primary max-[850px]:px-[42px] max-[400px]:px-[21px] max-[450px]:border-t-[10px]"
    >
      <Link href="">
        <Image
          alt="Portixel logo"
          height={35}
          width={139}
          src="/icon/logoFull.svg"
        />
      </Link>

      <div className="block flex-1"></div>

      <div className="centerUtil gap-4 block max-[850px]:hidden">
        {Links.map((link) => (
          <Link
            key={link.title}
            href={link.url}
            className="px-[22px] py-[10px] rounded-[10px]"
          >
            {link.title}
          </Link>
        ))}

        <button
          className="px-[22px] py-[10px] rounded-[10px] bg-white text-black font-bold"
          onClick={openWaitList}
        >
          Try Now
        </button>
      </div>

      <button
        className="p-1 rounded-[5px] hidden max-[850px]:block"
        onClick={() => {
          setDisplaySidebar(true);
        }}
      >
        <Image alt="Menu" height={40} width={40} src="/icon/burger.svg" />
      </button>

      {displaySidebar && <Sidebar setDisplaySideBar={setDisplaySidebar} />}
    </nav>
  );
};

export default Navbar;

export const Links = [
  {
    title: "Home",
    url: "",
  },
  {
    title: "Blog",
    url: "",
  },
  {
    title: "Community",
    url: "",
  },
];
