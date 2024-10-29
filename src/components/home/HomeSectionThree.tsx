import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomeSectionThree = () => {
  return (
    <div className="w-full centerUtil flex-col pb-[52px] px-5">
      <div
        className="w-full max-w-[389px] h-[120px] inline-block bg-[url('/icon/union.svg')]
      bg-cover mt-0 mx-auto max-[550px]:bg-[url('/icon/line.svg')] max-[550px]:bg-contain
      bg-no-repeat bg-center max-[550px]:-mt-4 -z-[1] transition-none"
      ></div>

      <div
        className="grid grid-cols-2 gap-5 h-fit max-[550px]:-mt-[3px] -mt-5 
      max-[550px]:grid-cols-1 z-[3]"
      >
        {Portfolios.map((card, index1) => (
          <div
            key={card.title}
            className="w-full max-w-[314px] h-full rounded-xl py-[27px] px-[15px] text-center
            font-normal text-lg flex flex-col cardGrain border border-bgCard"
          >
            <p className="">{card.title}</p>
            <p className="mt-[14px] mb-6 text-textSecondary text-sm">
              {card.body}
            </p>

            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              centeredSlides={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper mt-auto"
            >
              {card.images.map((image, index2) => (
                <SwiperSlide key={`${image.title}${index1}${index2}`}>
                  <Image alt="" width={284} height={183} src={image.title} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSectionThree;

const Portfolios = [
  {
    title: "Individual Portfolio",
    body: "For creatives, customize, organize, and share your portfolio with ease—letting your creativity shine while AI handles the rest. Start crafting your standout portfolio today!",
    images: [
      { title: "/template/image1.png" },
      { title: "/template/image1.png" },
      { title: "/template/image1.png" },
      { title: "/template/image1.png" },
    ],
  },
  {
    title: "Agency Portfolio",
    body: "Showcase your team's projects, collaborate with ease, present polished results, and impress clients—without the usual hassle.",
    images: [
      { title: "/template/image1.png" },
      { title: "/template/image1.png" },
      { title: "/template/image1.png" },
      { title: "/template/image1.png" },
    ],
  },
];
