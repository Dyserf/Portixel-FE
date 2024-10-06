"use client";
import Image from "next/image";
import { FormEvent } from "react";

const HomeSectionTwo = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="centerUtil flex-col w-full text-textSecondary px-4">
      <div className="centerUtil mt-[76px] mb-[32px] flex-wrap">
        <p className="font-bold text-base">Customizing to best fit you:</p>
        <div className="centerUtil max-[550px]:w-screen overflow-x-auto ">
          {CustomiseList.map((list, index) => (
            <div className="centerUtil p-3 gap-3 w-fit" key={list.title}>
              <span
                className="bg-bgSecondary inline-block w-[42px] aspect-square 
                centerUtil rounded-full "
              >
                {index + 1}
              </span>
              <p className="text-base font-medium max-[550px]:whitespace-nowrap max-[550px]:break-keep">
                {list.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="p-[3px] rounded-[10px] bg-gradient-to-bl from-secondary to-primary
      w-full max-w-[625px] z-[1]"
      >
        <form
          onSubmit={handleSubmit}
          className="bg-bgSecondary py-4 px-[21px] centerUtil rounded-[7px] gap-[5px]
          gap-y-3 max-[650px]:flex-wrap overflow-hidden"
        >
          <div className="centerUtil">
            <select className="bg-transparent p-1 max-[450px]:max-w-[70px]">
              {PreName.map((pre) => (
                <option key={pre.title} value={pre.title}>
                  {pre.title}
                </option>
              ))}
            </select>

            <span className="inline-block h-7 w-[1px] bg-stroke ml-[1px] mr-[5px]"></span>

            <input
              type="text"
              placeholder="Your name"
              className=" border-b-2 border-transparent p-1
            bg-transparent outline-none focus:border-primary
        "
            />
          </div>

          <button
            className="rounded-[10px] bg-white centerUtil gap-[10px]
        py-3 px-[19px] max-[650px]:w-full"
          >
            <Image alt="" height={20} width={20} src="/icon/star-primary.svg" />
            <p className="font-bold text-sm text-black">Generate Portfolio</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomeSectionTwo;

const CustomiseList = [
  {
    title: "Your Name",
  },
  {
    title: "Select Skill",
  },
  {
    title: "One Liner about yourself",
  },
];

export const PreName = [
  {
    title: "None",
  },
  {
    title: "Hi, I'm",
  },
  {
    title: "Hello, I'm",
  },
  {
    title: "Welcome, I'm",
  },
  {
    title: "Hey, I'm",
  },
  {
    title: "My name is",
  },
  {
    title: "Hello, my name is",
  },
];
