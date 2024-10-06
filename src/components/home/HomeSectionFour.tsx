const HomeSectionFour = () => {
  return (
    <div className="w-full py-[48px] px-4 centerUtil bg-[url('/icon/grid.svg')] bg-fixed">
      <div
        className="centerUtil flex-col w-full max-w-[619px] max-[550px]:max-w-[310px]
       max-[550px]:gap-3 font-bold"
      >
        <p className="w-full text-left text-[80px] text-textSecondary max-[550px]:text-5xl">
          Design
        </p>
        <p className="w-full text-right text-[100px] max-[550px]:text-[50px] withEase">
          With Ease
        </p>
      </div>
    </div>
  );
};

export default HomeSectionFour;
