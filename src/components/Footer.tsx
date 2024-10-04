import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="centerUtil justify-between pt-[54px] px-[57px] pb-[29px] flex-wrap">
      <div className="">
        <Link href="">
          <Image
            alt="Portixel logo"
            height={21}
            width={83}
            src="/icon/logoFull.svg"
          />
        </Link>

        <p className="text-sm text-textSecondary mt-4">
          ©{new Date().getFullYear()} portixel, All Rights Reserved.
        </p>
      </div>

      <p className="text-sm">Terms and Conditions</p>
    </footer>
  );
};

export default Footer;
