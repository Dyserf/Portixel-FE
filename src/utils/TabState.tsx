"use client";

interface ITabState<T = unknown> {
  Tabs: (T & { title: string })[];
  selected: string;
  setSelected: (data: string) => void;
}

const TabState = <T,>({ Tabs, selected, setSelected }: ITabState<T>) => {
  return (
    <div
      className="centerUtil gap-[5px] bg-[#242424] border border-stroke rounded-[5px]
        py-[6px] px-3 mb-[23px]"
    >
      {Tabs.map((tab) => (
        <button
          key={tab.title}
          className={`py-[5px] px-5 rounded-[5px] border border-transparent ${
            selected === tab.title ? "border-stroke bg-bgCard" : ""
          }`}
          onClick={() => setSelected(tab.title)}
          style={{ transition: "none" }}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

export default TabState;
