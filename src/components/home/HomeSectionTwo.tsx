"use client";
import Image from "next/image";
import { FormEvent, useState } from "react";

const HomeSectionTwo = () => {
  const [selectedInput, setSelectedInput] = useState<
    (typeof CustomiseList)[number]["title"] | ""
  >("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="centerUtil flex-col w-full text-textSecondary px-4">
      <div className="centerUtil mt-[76px] mb-[32px] flex-wrap gap-y-2">
        <p className="font-bold text-base">Customizing to best fit you:</p>
        <div
          className="centerUtil max-[600px]:w-screen overflow-x-auto
         max-[600px]:justify-start gap-2 px-3"
        >
          {CustomiseList.map((list, index) => (
            <button
              className={`centerUtil px-2 py-1 gap-3 rounded-[10px] ${
                selectedInput == list.title ? "selected" : ""
              } listSteps`}
              key={list.title}
              onClick={() => {
                setSelectedInput(list.title);
              }}
            >
              <span
                className="bg-bgSecondary inline-block w-[42px] aspect-square 
                centerUtil rounded-full "
              >
                {index + 1}
              </span>
              <p className="text-base font-medium whitespace-nowrap break-keep">
                {list.title}
              </p>
            </button>
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
          {selectedInput == "One Liner about yourself" ? (
            <div className="centerUtil flex-1">
              <input
                type="text"
                placeholder="Type something"
                className=" border-b-2 border-transparent p-1
            bg-transparent outline-none focus:border-primary w-full
        "
              />
            </div>
          ) : selectedInput == "Select Skill" ? (
            <div className="centerUtil flex-1">
              <select className="bg-transparent px-1 py-[6px] mb-[1px] w-full max-[450px]:max-w-[70px]">
                {Skills.map((skill) => (
                  <option key={skill.title} value={skill.title}>
                    {skill.title}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div className="centerUtil flex-1">
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
            bg-transparent outline-none focus:border-primary w-full
        "
              />
            </div>
          )}

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
] as const;

export const PreName = [
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

export const Skills = [
  {
    title: "UI/UX Designer",
  },
  {
    title: "Graphics Designer",
  },
  {
    title: "Developer",
  },
  {
    title: "Content Writer",
  },
];
