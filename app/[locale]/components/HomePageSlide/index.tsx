"use client";
import SectionTitle from "../Common/SectionTitle";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "./HomePageSlide.css";
import Sl2 from "@/public/images/HomeSlides/bia.png";
import Sl3 from "@/public/images/HomeSlides/slide2.png";
// import Sl7 from "@/public/images/HomeSlides/ei.png";
import Image from "next/image";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import Link from "next/link";

const CustomPrevArrow: React.FC<CustomArrowProps> = ({
  className,
  onClick,
}) => (
  <div className={`${className} custom-arrow custom-prev`} onClick={onClick}>
    <SlArrowLeft className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl" />
  </div>
);

const CustomNextArrow: React.FC<CustomArrowProps> = ({
  className,
  onClick,
}) => (
  <div className={`${className} mr-8 custom-arrow custom-next`} onClick={onClick}>
    <SlArrowRight className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl" />
  </div>
);

export default function HomeSlides() {
  let settings = {

    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    fade: true,
    className: "slider variable-width",
    dots: false,

    // arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  const data = [Sl2, Sl3];
  return (
    <>
      <section id="features" className=" bg-[green]/[.03]">
        <div className="mb-auto  h-[280px] md:h-full">
          <Slider {...settings}>
            <div className="flex relative">
              <Image alt="slide" src={Sl2} className="m-auto h-[280px] md:h-full" width={4903} height={0}></Image>
              <div className="absolute z-10 top-[5%] left-[55%] capitalize">
                <div className=" shadow-lg flex flex-col md:gap-6  text-gray-200 pl-4 pr-8 md:py-4 ">
                  <p className=" text-white xs:text-xl sm:text-2xl sm_p1:text-3xl md:text-4xl md_p1:text-4xl lg:text-5xl lg_p1:text-6xl xl:text-7xl font-bold drop-shadow-xl " style={{ textShadow: "2px 2px green" }}>
                    Keep Business Safe
                  </p>
                  <p className=" text-white xs:text-xl sm:text-2xl sm_p1:text-3xl md:text-4xl md_p1:text-4xl lg:text-5xl lg_p1:text-6xl xl:text-7xl font-bold drop-shadow-xl " style={{ textShadow: "2px 2px green" }}>
                    And Ensure High
                  </p>
                  <p className=" text-white xs:text-xl sm:text-2xl sm_p1:text-3xl md:text-4xl md_p1:text-4xl lg:text-5xl lg_p1:text-6xl xl:text-7xl font-bold drop-shadow-xl " style={{ textShadow: "2px 2px green" }}>
                    Avaibility
                  </p>
                </div>

                <div className="mt-1 xs:mt-2 sm:mt-3 md:mt-4 lg:mt-5  flex justify-start gap-1 xs:gap-2 sm:gap-3 md:gap-4 lg:gap-5 items-center">
                  <Link href='/about-us'>
                    <button className="gap-0.5 xs:gap-2 text-[8px] xs:text-xs md:text-sm  lg:text-lg xl:text-xl 2xl:text-2xl leading-[10px] p-0.5 xs:p-2  md:p-3 lg:p-4 xl:p-5 2xl:p-6 flex justify-center items-center border-2 border-[#0f7d02] bg-[#0f7d02] text-white hover:bg-[#735102] hover:border-[#735102] rounded-md">
                      More about us
                      <BsFillArrowRightCircleFill className="inline text-sm md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl" />
                    </button>
                  </Link>
                  <Link href='/services'><button className=" text-[8px] xs:text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl leading-[10px] p-1 xs:p-2 md:p-3 lg:p-4 xl:p-5 2xl:p-6 border-white border-2 bg-white text-black hover:bg-[#735102] hover:border-[#735102] hover:text-white rounded-md">Our Services</button></Link>
                </div>
              </div>
            </div>
            <div className="flex relative">
              <Image alt="slide" src={Sl3} className="m-auto h-[42vh] md:h-full" width={4903} height={882}></Image>
              <div className="absolute z-10 top-[5%] left-[50%] capitalize">
                <div className=" shadow-lg flex flex-col justify-center items-start md:gap-6  text-gray-200 pl-4 pr-8 p-1 md:py-4 ">
                  <p className=" text-[#0279cf]  xs:text-xl sm:text-2xl sm_p1:text-3xl md:text-4xl md_p1:text-4xl lg:text-5xl lg_p1:text-6xl xl:text-7xl font-bold drop-shadow-[0.5px_0.5px_red] md:drop-shadow-[1px_1px_red] xl:drop-shadow-[2px_2px_red] " >
                    We run all kinds of
                  </p>
                  <p className=" text-[#0279cf]  xs:text-xl sm:text-2xl sm_p1:text-3xl md:text-4xl md_p1:text-4xl lg:text-5xl lg_p1:text-6xl xl:text-7xl font-bold drop-shadow-[0.5px_0.5px_red] md:drop-shadow-[1px_1px_red] xl:drop-shadow-[2px_2px_red] ">
                    IT Services that
                  </p>
                  <p className=" text-[#0279cf]  xs:text-xl sm:text-2xl sm_p1:text-3xl md:text-4xl md_p1:text-4xl lg:text-5xl lg_p1:text-6xl xl:text-7xl font-bold drop-shadow-[0.5px_0.5px_red] md:drop-shadow-[1px_1px_red] xl:drop-shadow-[2px_2px_red] ">
                    Vow your success
                  </p>
                </div>
                <div className="mt-1 xs:mt-2 sm:mt-3 md:mt-4 lg:mt-5  flex justify-start gap-1 xs:gap-2 sm:gap-3 md:gap-4 lg:gap-5 items-center">
                  <button className="gap-0.5 xs:gap-2 text-[8px] xs:text-xs md:text-sm  lg:text-lg xl:text-xl 2xl:text-2xl leading-[10px] p-0.5 xs:p-2  md:p-3 lg:p-4 xl:p-5 2xl:p-6 flex justify-center items-center border-2 border-[#0f7d02] bg-[#0f7d02] text-white hover:bg-[#735102] hover:border-[#735102] rounded-md">
                    More about us
                    <BsFillArrowRightCircleFill className="inline text-sm md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl" />
                  </button>
                  <button className=" text-[8px] xs:text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl leading-[10px] p-1 xs:p-2 md:p-3 lg:p-4 xl:p-5 2xl:p-6 border-white border-2 bg-white text-black hover:bg-[#735102] hover:border-[#735102] hover:text-white rounded-md">Our Services</button>
                </div>
              </div>
            </div>

          </Slider>
        </div>
      </section>
    </>
  );
}