"use client";
import { Icon } from '@iconify/react';
import Image from 'next/image'
import React, { useState } from 'react'
import { Swiper, SwiperSlide, } from "swiper/react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import 'swiper/css/scrollbar';
// import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-creative';
import 'swiper/css/thumbs';
import 'swiper/css/virtual';
import vienslide from '../../../../public/images/products/vienslide.png'
import { FreeMode, Autoplay, Scrollbar, EffectCards, Pagination, Navigation, EffectCoverflow, EffectFade, A11y, EffectCreative, Thumbs, Virtual } from "swiper/modules";
interface ItemDocumentProps {
  code: string;
  title: string;
  value?: string;
  type?: string;
  multiple_language?: string | null
}
export default function SlideProduct({
  benafitImages,
  pageName
}: {
  benafitImages: ItemDocumentProps[],
  pageName: string
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeThumb, setActiveThumb] = useState(0);

  // console.log('thumbsSwiper', thumbsSwiper);

  const handleSlideChange = (swiper) => {
    setActiveThumb(swiper.activeIndex);
  };
  return (
    <section
      id="projects" className="scroll-mt-28 w-screen  pb-0 mt-3 mb-3">
      <div className='container max-w-full 2xl:!pl-[8px] !pl-0 !pr-0 sm:!pr-4  sm:max-w-screen-xl'>
        {/* <Icon icon="icon-park-solid:slide-two" className='text-amber-950 text-[40px] sm:text-[50px]' /> */}
        <Swiper
          speed={1000}
          slidesPerView={1}
          effect={'slide'}
          loop={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          onSlideChange={handleSlideChange}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          scrollbar={false}
          freeMode={false}
          modules={[FreeMode, Autoplay, Virtual, A11y, EffectFade, Thumbs, EffectCreative, EffectCards, Scrollbar, EffectCoverflow, Pagination, Navigation]}
          pagination={{
            type: 'bullets',
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className} inline-block !w-2 !h-2 sm:!w-6 sm:!h-6 bg-gray-500 mx-2"></span>`
            }
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          // navigation={false}
          className=" group ease-linear !pb-1 sm:!pb-10  duration-100"
        >
          {benafitImages?.map((project, index) => (
            <SwiperSlide key={index} className="ease-linear duration-100  pb-[30px] ">
              <div className={"luster w-full  rounded-sm sm:rounded-xl bg-opacity-40"} >
                <Image width={4000} height={0} className="w-full border-[1px] border-gray-300 rounded-sm sm:rounded-xl" src={`${process.env.BACKEND_URL}${project.value}`} alt={project.title} />
              </div>
            </SwiperSlide>
          ))
          }
          <div
            className="
          swiper-button-prev 
          after:text-xl after:text-white z-[1000]
          w-[60px] h-[60px] th-fl rounded-full absolute  -left-2 bottom-3"
          >
            <Icon icon="ei:arrow-left" className='hidden text-[180px] sm:block text-[#3c91eb] ' />
          </div>
          <div
            className="swiper-button-next th-fl z-[1000] -right-2 bottom-3
           after:text-xl after:bg-white w-[60px] h-[60px] rounded-full 
           absolute   "
          >
            <Icon icon="ei:arrow-left" className='rotate-180 hidden text-[180px] sm:block text-[#3c91eb] ' />
          </div>
          <div className="swiper-pagination">

          </div>

        </Swiper >

        <Swiper
          speed={1000}
          slidesPerView={5}
          effect={'cube'}
          loop={false}
          onSwiper={setThumbsSwiper}
          watchSlidesProgress={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          scrollbar={true}
          freeMode={true}
          // navigation={true}
          modules={[FreeMode, Thumbs, Scrollbar]}
          className=" group ease-linear  duration-100"
        >
          {benafitImages?.map((project, index) => (
            <SwiperSlide key={index} className={"mt-2 sm:mt-4 mx-3  ease-linear duration-100  pb-[30px] "}>
              <div onClick={() => setActiveThumb(index)} className={"luster w-full p-0.5 sm:p-1 rounded-sm sm:rounded-xl  bg-[rgba(151,201,255,0.4)] bg-opacity-40 ease-linear duration-150 "
                + (index === activeThumb ? 'border-[2px] border-amber-950 scale-125 sm:scale-110' : '')} >
                <Image width={4000} height={0} className={"cursor-pointer w-full rounded-sm sm:rounded-xl "} src={`${process.env.BACKEND_URL}${project.value}`} alt={project?.title} />
              </div>
            </SwiperSlide>
          ))
          }

        </Swiper >
      </div>

    </section >
  );
}
