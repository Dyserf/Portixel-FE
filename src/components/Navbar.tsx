"use client";
import { WaitListContext } from "@/utils/Providers";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const Navbar = () => {
  const waitlist = useContext(WaitListContext);

  const openWaitList = () => {
    waitlist?.setWaitListState(true);
  };

  return (
    <nav className="w-full centerUtil justify-between py-5 px-[82px] border-t-[20px] border-primary">
      <Link href="">
        <Image
          alt="Portixel logo"
          height={35}
          width={139}
          src="/icon/logoFull.svg"
        />
      </Link>

      <div className="centerUtil gap-4">
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
          className="px-[22px] py-[10px] rounded-[10px] bg-white text-black"
          onClick={openWaitList}
        >
          Try Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

const Links = [
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
