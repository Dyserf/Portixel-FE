import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="centerUtil justify-between pt-[54px] px-[57px] pb-[29px]
     max-[600px]:px-[24px] max-[600px]:items-end"
    >
      <div className="">
        <Link href="">
          <Image
            alt="Portixel logo"
            height={21}
            width={83}
            src="/icon/logoFull.svg"
          />
        </Link>

        <p className="text-sm text-textSecondary mt-4 max-[600px]:text-[10px]">
          ©{new Date().getFullYear()} portixel, All Rights Reserved.
        </p>
      </div>

      <div className="flex-1 block"></div>

      <p className="text-sm max-[600px]:text-[10px]">Terms and Conditions</p>
    </footer>
  );
};

export default Footer;
