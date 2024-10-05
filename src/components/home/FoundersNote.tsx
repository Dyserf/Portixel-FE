"use client";
import { WaitListContext } from "@/utils/Providers";
import Image from "next/image";
import { useContext, useState } from "react";

const FoundersNote = () => {
  const [display, setDisplay] = useState(false);
  const waitlist = useContext(WaitListContext);

  const openWaitList = () => {
    waitlist?.setWaitListState(true);
  };

  return (
    <div
      className=" fixed bottom-[20px] right-[20px] flex flex-col items-end
    gap-3"
    >
      <div
        className="fixed top-0 left-0 min-h-screen h-full w-full z-0 backdrop-blur-md"
        style={{ display: display ? "block" : "none" }}
        onClick={() => setDisplay(false)}
      ></div>

      <div
        className="max-w-[528px] w-[calc(100vw-40px)] max-h-[calc(100vh-95px)] p-7 rounded-[20px]
         bg-bgCard flex flex-col gap-6 overflow-y-auto overscroll-none text-sm text-textSecondary
           z-[2] foundersNote"
        style={{ display: display ? "flex" : "none" }}
      >
        <p className="text-white font-bold text-2xl">Yoo! 👋</p>
        <p className="">
          I am excited to have you here. As a designer, I am aware of the
          challenges of having a professional portfolio and I had my own share
          of the frustrating moments 🤦‍♂️. At Portixel, we believe that portfolio
          building should be effortless and easy. That&apos;s why my team and I
          have built YOU an AI + Blockchain solution for this problem 🕺💃.
        </p>
        <p className="">
          🙅‍♂️ This is not another AI interface generation nor another dribble or
          behance, we have built a platform that helps you organize your works
          tailored to different projects and skills. Our product v2 rewards
          creatives for each reused work.
        </p>
        <p className="">
          It&apos;s been an exciting journey building, and as part of our giving
          back to creatives. We are offering our premium plan as a giveaway to
          the first 100 waitlist subscribers. You can be a valuable part of
          Portixel.
        </p>

        <div className="flex items-center gap-[10px]">
          <Image
            alt="Victor Chiemerie"
            height={40}
            width={40}
            src="/gallery/founder.jpeg"
            className="rounded-full"
          />
          <div className="">
            <p className="text-white font-bold">Victor Chiemerie</p>
            <p className="">Founder, Portixel</p>
          </div>
        </div>

        <button
          className="bg-white text-black font-bold p-3 rounded-[10px]"
          onClick={openWaitList}
        >
          Join our waitlist
        </button>
      </div>

      <button
        className="bg-gradient-to-bl from-secondary to-primary p-[13px] 
      rounded-full z-[2]"
        title={display ? "Close founder's note" : "Open founder's note"}
        onClick={() => {
          setDisplay(!display);
        }}
      >
        <Image
          alt="Message"
          height={24}
          width={24}
          src={display ? "/icon/close.svg" : "/icon/chat.svg"}
        />
      </button>
    </div>
  );
};

export default FoundersNote;
