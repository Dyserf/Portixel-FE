"use client";
import FoundersNote from "@/components/home/FoundersNote";
import HomeSectionFive from "@/components/home/HomeSectionFive";
import HomeSectionFour from "@/components/home/HomeSectionFour";
import HomeSectionOne from "@/components/home/HomeSectionOne";
import HomeSectionSix from "@/components/home/HomeSectionSix";
import HomeSectionThree from "@/components/home/HomeSectionThree";
import HomeSectionTwo from "@/components/home/HomeSectionTwo";
import WaitList from "@/components/home/WaitList";
import { WaitListContext } from "@/utils/Providers";
import { useContext } from "react";

export default function Home() {
  const waitlist = useContext(WaitListContext);

  return (
    <div className="">
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
