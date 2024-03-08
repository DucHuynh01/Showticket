"use client"
import React, { useEffect, useState } from 'react'
import imgHeroProduct from '../../../../public/images/products/abc.jpeg'
import dsds from '../../../../public/images/products/vtcetdhdn.jpg'
import Image from 'next/image'
import { Icon } from '@iconify/react';
import SectionTitle from '../Common/SectionTitle'
import Link from 'next/link'
import p1 from "../../../../public/images/smartwork/p1.png";
import p2 from "../../../../public/images/smartwork/p2.png";
import p3 from "../../../../public/images/smartwork/p3.png";
import FormRegist from '../Contact/FormRegist'
import SlideHero from './SlideHero'
import ChatIcon from '../Chat/ChatIcon'
import ShareIcon from '../Chat/ShareIcon'
export interface ItemDocumentProps {
  code: string;
  title: string;
  value?: string;
  type?: string;
  multiple_language?: string | null
}
const Hero = (
  {
    fontTitle,
    pageName,
    metaImage,
    description,
    slideHero
  }: {
    fontTitle: string,
    pageName: string,
    metaImage: string,
    description: string,
    slideHero: ItemDocumentProps[]
  }) => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    }
  }, [open]);


  const [isFixed, setIsFixed] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      const footerPosition = footer.offsetTop;
      if (window.innerWidth > 1200) {
        setIsMobile(false)
      } else {
        setIsMobile(true)
      }
      // Kiểm tra nếu scroll đến vị trí phía trên của footer
      if (window.pageYOffset >= footerPosition - window.innerHeight) {
        // Hủy bỏ position: fixed
        setIsFixed(false);
      } else {
        // Giữ nguyên position: fixed
        setIsFixed(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup sự kiện khi component bị unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={' w-full flex justify-center items-start '}>
      <div className=' relative container mt-10 lg:mt-20 pb-2 max-w-full sm:max-w-screen-xl flex lg:flex-row  flex-col items-start md:items-center gap-6 lg:justify-start lg:items-start w-full' >
        <div className='flex w-full gap-8 lg:w-[50%] flex-col justify-center items-center'>
          <h1 className=' max-w-[600px] w-full ease-linear duration-150 h-[50%] text-3xl sm:text-4xl lg:text-4xl'>
            <div className={`font-bold flex text-star justify-start`}>
              {pageName}
            </div>
            <div className='text-sm text-[#222222d1] sm:text-sm font-medium mt-2 sm:mt-10'>{description}</div>
          </h1>
          <div className='flex justify-start sm:justify-center gap-2 sm:gap-4  w-full  '>
            <div className=' th-fl'>
              <button type="button" className="th-fl gap-0.5 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ease-linear duration-100">
                <Icon className='text-[25px]' icon="emojione-monotone:letter-q" />
                <Icon className='text-[17px]' icon="mdi:ampersand" />
                <Icon className='text-[25px]' icon="icon-park-solid:handle-a" />
                {/* Q&A
                <Icon icon="pajamas:arrow-right" className='ease-linear duration-100 group-hover:translate-x-2' /> */}
              </button>
            </div>
            <div className='th-fl'>
              <button
                onClick={() => setOpen(true)} type="button"
                className="th-fl gap-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ease-linear duration-100">
                <Icon className='text-[20px]' icon="fa6-solid:pen-to-square" />
                <div className='text-base'>Đăng Kí Thử</div>
              </button>
              {open && <FormRegist setOpen={setOpen} />}
            </div>
          </div>
        </div>
        {slideHero?.length > 0 && <SlideHero slideHero={slideHero} />}
        {slideHero?.length === 0 && <div className='relative z-0 flex bg-white lg:mt-[80px] items-center h-[50%] rounded-md '>
          <Image src={metaImage} width={900} height={900} alt='ksksk' className='z-[1000] w-[420px] h-[250px] ease-linear duration-100 sm:min-w-[600px] sm:w-[600px] sm:h-[400px] border-[1px] border-gray-100 ' />
        </div>}
        
        <div id="chat"
          className={" w-full lg:w-fit min-w-[100px] z-[98] ease-linear duration-100 "
            + (isFixed ? 'fixed lg:top-40 top-96 xl:right-2 2xl:right-10 3xl:right-32 4xl:right-64 5xl:right-96' : isMobile ? '' : 'absolute')
            // + (isFixed ? 'xl:fixed xl:right-4 2xl:right-20 3xl:right-44 4xl:right-80 5xl:right-[700px] ' : 'absolute')
          }>
          <ChatIcon pageName="" />
        </div>

      </div >

    </div >
  )
}

export default Hero