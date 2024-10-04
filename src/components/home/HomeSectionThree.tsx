import Image from "next/image";

const HomeSectionThree = () => {
  return (
    <div className="w-full centerUtil flex-col pb-[52px]">
      <div
        className="w-full max-w-[389px] h-[120px] inline-block bg-[url('/icon/union.svg')]
      bg-cover mt-0 mx-auto"
      ></div>

      <div className="grid grid-cols-2 gap-5 h-fit -mt-5">
        {Portfolios.map((card) => (
          <div
            key={card.title}
            className="w-full max-w-[314px] h-full rounded-xl py-[27px] px-[15px] text-center
            font-normal text-lg flex flex-col HomePortfolioCard border border-bgCard "
          >
            <p className="">{card.title}</p>
            <p className="mt-[14px] mb-6 text-textSecondary text-sm">
              {card.body}
            </p>

            <Image
              alt=""
              width={284}
              height={183}
              src={card.img}
              className="mt-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSectionThree;

const Portfolios = [
  {
    title: "Individual Portfolio",
    body: "For creatives, customize, organize, and share your portfolio with ease—letting your creativity shine while AI handles the rest. Start crafting your standout portfolio today!",
    img: "/template/image1.png",
  },
  {
    title: "Agency Portfolio",
    body: "Showcase your team's projects, collaborate with ease, present polished results, and impress clients—without the usual hassle.",
    img: "/template/image1.png",
  },
];
