import React from 'react';
import HeaderTopNav from '../Header/HeaderTopNav';
import HeaderContent from '../Header/HeaderContent';
import SearchHeader from './SearchHeader';
export default function Header() {
  return (
    <>
      <div className='relative'>
        <img
          src='https://static.tkbcdn.com/site/global/content-v2/img/home-search-bg-03.jpg'
          alt='No picture'
          className='h-[280px] w-full'
        />
        <div className='absolute top-0 w-full'>
          <HeaderTopNav></HeaderTopNav>
        </div>
        <div className='absolute left-[48rem] top-20 text-white'>
          <HeaderContent></HeaderContent>
        </div>
          <div className='absolute left-[36.3rem] top-36'>
            <SearchHeader></SearchHeader>
          </div>
      </div>
    </>
  );
}
