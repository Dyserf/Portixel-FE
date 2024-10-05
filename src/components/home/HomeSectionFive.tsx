import { WaitListContext } from "@/utils/Providers";
import Image from "next/image";
import { useContext } from "react";

const HomeSectionFive = () => {
  const waitlist = useContext(WaitListContext);

  const openWaitList = () => {
    waitlist?.setWaitListState(true);
  };

  return (
    <div className="py-14 px-4 relative overflow-hidden centerUtil bg-black">
      <video autoPlay muted loop className="absolute top-0 left-0 opacity-40">
        <source src="/video/geometry.mp4" type="video/mp4" />
      </video>

      <div
        className="py-20 px-[32px] rounded-[20px] border border-bgCard
       bg-[#19181887] backdrop-blur-[50px] centerUtil gap-[98px]
       w-full max-w-[1278px] max-[1000px]:gap-[52px] max-[850px]:items-start
       "
      >
        <div className="max-w-[469px]">
          <p className="font-bold text-5xl max-[850px]:text-2xl">
            Ready to level up your design game?
          </p>
          <p
            className="font-normal text-base text-textSecondary mt-[30px] mb-6
          max-[850px]:text-sm"
          >
            Let Portixel handle the details while you focus on what you do best:
            creating. Start building your portfolio today and make an impact
            with every project!
          </p>

          <button
            className="p-3 w-full rounded-[10px] bg-white text-black font-bold"
            onClick={openWaitList}
          >
            Try Now
          </button>
        </div>

        <div className="flex flex-col items-start gap-[30px] max-[1000px]:w-full">
          {Points.map((point) => (
            <div key={point.title} className="centerUtil gap-5">
              <div className="bg-gradient-to-bl from-secondary to-primary p-[3px] rounded-[10px]">
                <div className="bg-bgCard rounded-[7px] p-[10px]">
                  <Image
                    alt=""
                    height={30}
                    width={30}
                    src={point.img}
                    className="max-[850px]:w-5 max-[850px]:h-5"
                  />
                </div>
              </div>

              <div className="">
                <p className="text-xl font-bold max-[850px]:font-base">
                  {point.title}
                </p>
                <p className="text-textSecondary text-sm font-normal mt-[5px]">
                  {point.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSectionFive;

const Points = [
  {
    img: "/icon/star.svg",
    title: "AI & Blockchain",
    body: "Secured, seamless, and intelligent portfolio creation & management.",
  },
  {
    img: "/icon/shape.svg",
    title: "Create Sub-Portfolio",
    body: "Organize your work tailored to different projects or skill.",
  },
  {
    img: "/icon/figma.svg",
    title: "Figma Integration",
    body: "Ease for designers to import design files.",
  },
  {
    img: "/icon/github.svg",
    title: "Github Integration",
    body: "Ease for developers to import repositories.",
  },
];
