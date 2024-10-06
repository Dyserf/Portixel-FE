"use client";
import { WaitListContext } from "@/utils/Providers";
import Image from "next/image";
import Link from "next/link";
import { memo, useContext } from "react";
import { Links } from "./Navbar";

interface ISidebar {
  setDisplaySideBar: (data: boolean) => void;
}

const Sidebar = ({ setDisplaySideBar }: ISidebar) => {
  const waitlist = useContext(WaitListContext);

  const openWaitList = () => {
    closeSidebar();
    waitlist?.setWaitListState(true);
  };

  const closeSidebar = () => {
    setDisplaySideBar(false);
  };

  return (
    <nav
      className="w-full h-screen py-5 px-[24px] fixed top-0 overscroll-none
      left-0 backdrop-blur-md flex flex-col z-[5] overflow-y-auto bg-[rgba(1,1,1,0.8)]"
      style={{ transition: "height 0s" }}
    >
      <div className="w-full centerUtil justify-between gap-2 mb-[34px]">
        <Link href="">
          <Image
            alt="Portixel logo"
            height={26}
            width={105}
            src="/icon/logoFull.svg"
          />
        </Link>

        <div className="block flex-1"></div>

        <button
          className="p-1 rounded-[5px] hidden max-[850px]:block"
          onClick={closeSidebar}
        >
          <Image alt="Menu" height={30} width={30} src="/icon/close.svg" />
        </button>
      </div>

      {Links.map((link) => (
        <Link
          key={link.title}
          href={link.url}
          className=" py-[10px] rounded-[10px] mb-[30px]"
          onClick={closeSidebar}
        >
          {link.title}
        </Link>
      ))}

      <button
        className="px-[32px] py-[10px] rounded-[10px] font-bold bg-white text-black w-fit"
        onClick={openWaitList}
      >
        Try Now
      </button>
    </nav>
  );
};

export default memo(Sidebar);
