import { WaitListContext } from "@/utils/Providers";
import { useContext } from "react";

const WaitListSuccess = ({
  displayCount = "0",
}: {
  displayCount: string | null;
}) => {
  const waitlist = useContext(WaitListContext);

  const closeWaitList = () => {
    waitlist?.setWaitListState(false);
  };

  return (
    <div className="my-auto max-[500px]:py-[50px]">
      <p className="font-bold text-[46px] max-[500px]:text-[20px]">
        You are number {displayCount} on the list
      </p>
      <p
        className="text-2xl font-normal text-textSecondary mt-6 max-w-[598px]
       max-[500px]:text-[14px]"
      >
        You are now a valuable part of Portixel. Let&apos;s Design with Ease!
      </p>

      <button
        className="px-[28px] py-[10px] rounded-[10px] bg-white text-black font-bold
        mt-[26px]"
        onClick={closeWaitList}
      >
        Try Now
      </button>
    </div>
  );
};

export default WaitListSuccess;
