import FoundersNote from "@/components/home/FoundersNote";
import HomeSectionFive from "@/components/home/HomeSectionFive";
import HomeSectionFour from "@/components/home/HomeSectionFour";
import HomeSectionOne from "@/components/home/HomeSectionOne";
import HomeSectionSix from "@/components/home/HomeSectionSix";
import HomeSectionThree from "@/components/home/HomeSectionThree";
import HomeSectionTwo from "@/components/home/HomeSectionTwo";

export default function Home() {
  return (
    <div className="">
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeSectionFive />
      <HomeSectionSix />
      <FoundersNote />
    </div>
  );
}
