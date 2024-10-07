"use client";
import FoundersNote from "@/components/home/FoundersNote";
import HomeSectionFive from "@/components/home/HomeSectionFive";
import HomeSectionFour from "@/components/home/HomeSectionFour";
import HomeSectionOne from "@/components/home/HomeSectionOne";
import HomeSectionSix from "@/components/home/HomeSectionSix";
import HomeSectionThree from "@/components/home/HomeSectionThree";
import HomeSectionTwo from "@/components/home/HomeSectionTwo";
import WaitList from "@/components/home/waitlist/WaitList";
import { WaitListContext } from "@/utils/Providers";
import { useContext } from "react";

export default function Home() {
  const waitlist = useContext(WaitListContext);
  const error = waitlist?.errorState;

  return (
    <div className="flex flex-col">
      {error && (
        <div className="fixed top-2 z-[5] w-full inline-block">
          <p
            className="text-red-400 w-fit
             mx-auto bg-bgCard p-2 rounded "
          >
            {error}
          </p>
        </div>
      )}

      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeSectionFive />
      <HomeSectionSix />
      <FoundersNote />

      {waitlist?.waitListState && <WaitList />}
    </div>
  );
}
