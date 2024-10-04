import Image from "next/image";
import Link from "next/link";

const HomeSectionSix = () => {
  return (
    <div
      className="centerUtil flex-col py-[47px] gap-[30px] bg-[url('/icon/grid.svg')]
    border-t-[20px] border-b-[20px] border-primary mt-6"
    >
      <p className="">Follow social media accounts</p>
      <div className="centerUtil gap-10 flex-wrap">
        {Links.map((link) => (
          <Link
            href={link.url}
            key={link.title}
            title={link.title}
            className="
            p-[10px] rounded-[10px] bg-bgCard
          "
          >
            <Image alt={link.title} height={24} width={24} src={link.image} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeSectionSix;

const Links = [
  {
    url: "",
    title: "X",
    image: "/icon/x.svg",
  },
  {
    url: "",
    title: "Linkedin",
    image: "/icon/linkedin.svg",
  },
  {
    url: "",
    title: "Instagram",
    image: "/icon/instagram.svg",
  },
  {
    url: "",
    title: "Facebook",
    image: "/icon/facebook.svg",
  },
];
