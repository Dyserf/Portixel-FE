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
        <div className="centerUtil flex-wrap">
          {CustomiseList.map((list, index) => (
            <div className="centerUtil p-3 gap-3 flex-wrap" key={list.title}>
              <span
                className="bg-bgSecondary inline-block w-[42px] aspect-square centerUtil 
            rounded-full "
              >
                {index + 1}
              </span>
              <p className="">{list.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="p-[3px] rounded-[10px] bg-gradient-to-bl from-secondary to-primary
      w-full max-w-[625px]"
      >
        <form
          onSubmit={handleSubmit}
          className="bg-bgSecondary py-4 px-[21px] centerUtil rounded-[7px] gap-[5px]
          flex-wrap gap-y-2"
        >
          <select className="bg-transparent p-1">
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

          <button
            className="rounded-[10px] bg-white centerUtil gap-[10px]
        py-3 px-[19px]"
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
