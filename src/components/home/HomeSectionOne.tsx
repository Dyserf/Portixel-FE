const HomeSectionOne = () => {
  return (
    <div
      className="w-full pt-[121px] pb-[114px] px-4 centerUtil bg-[url('/icon/grid.svg')]
     bg-fixed max-[850px]:pt-[98px] max-[850px]:pb-[87px]"
    >
      <div
        className="max-w-[896px] centerUtil flex-col gap-[23px] text-center
      "
      >
        <h2
          className="text-[64px] font-bold max-[850px]:text-[40px]
        max-[850px]:max-w-[622px]"
        >
          AI-powered portfolio creation and workflow ease
        </h2>

        <h4
          className="text-lg font-normal max-w-[804px] text-textSecondary 
        max-[850px]:text-sm max-[850px]:max-w-[497px]"
        >
          Creatives, say goodbye to the struggle of crafting portfolios. With
          Portixel, you now have an AI-powered tool that helps you build,
          manage, and share your design portfolio effortlessly!
        </h4>
      </div>
    </div>
  );
};

export default HomeSectionOne;
